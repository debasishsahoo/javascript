const timer = document.querySelector('#time span')

setInterval(() => {
	timer.innerText = new Date().toLocaleString()
}, 1000)

/**
 * * This is Used for Console Log
 * ! it is not used in this project
 * @param {string} message
 * ? it is optional
 * Todo:This is A Todod
 */
function logSomething() {
	console.log(Math.random())
	console.log("%cThis is a green text", "color:green");
	console.log("%cThis is a custom font style", "color: blue; font-family:sans-serif; font-size: 20px");
	console.log('%c JavaScript!!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
	console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
}