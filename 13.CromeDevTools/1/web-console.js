;(function () {
	if (!console) window.console = {}

	var _assert = console.assert
	var _dir = console.dir
	var _log = console.log
	var _info = console.info
	var _error = console.error
	var _warn = console.warn
	var _clear = console.clear
	var _time = console.time
	var _timeEnd = console.timeEnd
	var timeKeeper = {}
	var maxEntries = 50

	var stringifier = (function () {
		var rx_one = /^[\],:{}\s]*$/,
			rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
			rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
			rx_four = /(?:^|:|,)(?:\s*\[)+/g,
			rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g

		function f(n) {
			return n < 10 ? '0' + n : n
		}

		function this_value() {
			return this.valueOf()
		}

		var gap,
			indent,
			meta = {
				'\b': '\\b',
				'\t': '\\t',
				'\n': '\\n',
				'\f': '\\f',
				'\r': '\\r',
				'"': '\\"',
				'\\': '\\\\'
			},
			map,
			id

		function quote(string) {
			rx_escapable.lastIndex = 0
			return rx_escapable.test(string)
				? '"' +
						string.replace(rx_escapable, function (a) {
							var c = meta[a]
							return typeof c === 'string'
								? c
								: '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4)
						}) +
						'"'
				: '"' + string + '"'
		}

		function getProps(obj) {
			var props = []

			for (var prop in obj) {
				props.push(prop)
			}

			return props
		}

		function strElement(element) {
			var tagName = element.tagName.toLowerCase()

			var str = '<' + tagName

			if (element.attributes.length > 0) {
				str += ' '
			}

			str += Array.prototype.map
				.call(element.attributes, function (a) {
					if (a.value === '') {
						return a.name
					}
					return a.name + '=' + quote(a.value)
				})
				.join(' ')

			str += '>'

			if (element.children.length || element.textContent.length > 79) {
				str += '\u2026' // ellipsis
			} else {
				str += element.textContent
			}

			str += '</' + tagName + '>'

			return str
		}

		function str(key, holder) {
			var i,
				k,
				v,
				length,
				mind = gap,
				partial,
				value,
				anchor

			try {
				value = holder[key]

				if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
					value = value.toJSON(key)
				}

				if (value instanceof HTMLElement) {
					return strElement(value)
				}

				if (value instanceof RegExp) {
					return String(value)
				}

				if (value instanceof MimeType || value instanceof Plugin) {
					// Chrome issue(?): As these objects are nested, completely new versions of the same object are (seemingly) generated.
					// So, our reference tracking won't track them properly.
					return Object.prototype.toString.call(value)
				}

				switch (typeof value) {
					case 'string':
						return quote(value)

					case 'boolean':
					case 'null':
					case 'number':
					case 'undefined':
						return String(value)

					case 'function':
					case 'object':
						if (!value) {
							return 'null'
						}

						var _id = map.indexOf(value) + 1

						if (_id > 0) {
							return '/**ref:' + _id.toString(16) + '**/'
						} else {
							map.push(value)
							_id = map.length
							anchor = '/**id:' + _id.toString(16) + '**/'
						}

						if (typeof value === 'function') {
							return anchor + ' ' + String(value)
						}

						gap += indent
						partial = []

						if (Object.prototype.toString.apply(value) === '[object Array]') {
							length = value.length
							for (i = 0; i < length; i += 1) {
								partial[i] = str(i, value) || 'null'
							}

							v =
								partial.length === 0
									? '[]'
									: '[\n' +
									  gap +
									  anchor +
									  '\n' +
									  gap +
									  partial.join(',\n' + gap) +
									  '\n' +
									  mind +
									  ']'
							gap = mind
							return v
						}

						getProps(value).forEach(function (k) {
							v = str(k, value)
							if (v) {
								partial.push(quote(k) + ': ' + v)
							}
						})

						v =
							partial.length === 0
								? '{}'
								: '{\n' +
								  gap +
								  anchor +
								  '\n' +
								  gap +
								  partial.join(',\n' + gap) +
								  '\n' +
								  mind +
								  '}'
						gap = mind

						return v
				}
			} catch (err) {
				_error.call(console, err)
				return '/**error accessing property**/'
			}
		}

		function getString(value) {
			if (typeof value === 'string') return value

			gap = ''
			indent = '  '
			map = []

			var returnVal = str('', { '': value })

			var n = map.length

			while (n) {
				if (!new RegExp('/\\*\\*ref:' + n.toString(16) + '\\*\\*/').test(returnVal)) {
					returnVal = returnVal.replace(
						new RegExp('[\r\n\t ]*/\\*\\*id:' + n.toString(16) + '\\*\\*/', 'g'),
						''
					)
				}
				n--
			}

			map = null

			return returnVal
		}

		return {
			quote: quote,
			getString: getString
		}
	})()

	function format() {
		var i = 0,
			val,
			args = arguments

		return args[0].replace(/(%?%[sdifoO])/g, function (c) {
			if (c.length === 3) return c

			val = args[++i]

			if (val == null) {
				return '' + val
			}

			switch (c.charAt(1)) {
				case 's':
					return val
				case 'd':
				case 'i':
					return typeof val === 'number' ? Math.floor(val) : 'NaN'
				case 'f':
					return typeof val === 'number' ? val : 'NaN'
				default:
					if (typeof val === 'string') {
						return stringifier.quote(val)
					} else {
						return stringifier.getString(val)
					}
			}
		})
	}

	function truncateEntries() {
		while (div.childNodes.length > maxEntries) {
			div.removeChild(div.firstChild)
		}
	}

	function createLogEntry(entryType) {
		return function () {
			var args = arguments
			let textContent = ''

			if (
				typeof args[0] === 'string' &&
				args.length > 1 &&
				/((^|[^%])%[sdifoO])/.test(args[0])
			) {
				textContent = format.apply(null, args)
			} else {
				textContent = [].map.call(args, stringifier.getString).join(' ')
			}

			return parent.postMessage(
				{
					from: 'codedamn-iframe',
					type: 'entry',
					data: {
						content: textContent,
						type: entryType
					}
				},
				'*'
			)
		}
	}

	function clearConsole() {
		parent.postMessage(
			{
				from: 'codedamn-iframe',
				type: 'clear'
			},
			'*'
		)
	}

	console.log = function () {
		var args = arguments

		_log && _log.apply(console, args)

		if (!args.length) return

		createLogEntry('log').apply(null, args)
	}

	console.warn = function () {
		var args = arguments

		_warn && _warn.apply(console, args)

		if (!args.length) return

		createLogEntry('warning').apply(null, args)
	}

	console.info = function () {
		var args = arguments

		_info && _info.apply(console, args)

		if (!args.length) return

		createLogEntry('info').apply(null, args)
	}

	console.error = function () {
		var args = arguments

		_error && _error.apply(console, args)

		if (!args.length) return

		var e = args[0]

		if (e instanceof Error) {
			createLogEntry('error')({
				message: e.message,
				filename: e.filename,
				lineno: e.lineno,
				colno: e.colno
			})
		} else {
			createLogEntry('error').apply(null, args)
		}
	}

	console.assert = function () {
		var args = arguments

		_assert && _assert.apply(console, args)

		if (!args[0]) {
			createLogEntry('assert').apply(null, Array.prototype.slice.call(args, 1))
		}
	}

	console.dir = function () {
		var args = arguments

		_dir && _dir.apply(console, args)

		if (!args.length) return

		createLogEntry('log')(args[0])
	}

	console.clear = function () {
		_clear && _clear.apply(console, arguments)

		clearConsole()
	}

	console.time = function (label) {
		var now = performance.now()

		_time && _time.apply(console, arguments)

		if (!arguments.length) label = 'default'

		timeKeeper[label] = now
	}

	console.timeEnd = function (label) {
		var now = performance.now()

		_timeEnd && _timeEnd.apply(console, arguments)

		if (!arguments.length) label = 'default'

		if (!(label in timeKeeper)) return

		var diff = now - timeKeeper[label]

		delete timeKeeper[label]

		createLogEntry('log')('%s: %sms', label, diff.toFixed(3))
	}

	console.config = function (settings) {
		if (typeof settings === 'object') {
			if (settings.maxEntries > 0) {
				maxEntries = settings.maxEntries
				truncateEntries()
			}
		}

		console.log({
			maxEntries: maxEntries
		})
	}

	window.addEventListener('error', function (e) {
		createLogEntry('error')({
			message: e.message,
			filename: e.filename,
			lineno: e.lineno,
			colno: e.colno
		})
	})

	clearConsole()
})()
