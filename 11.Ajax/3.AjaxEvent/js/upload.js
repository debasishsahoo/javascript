let progressBar = document.getElementById("progress");
let loadBtn = document.getElementById("button");
let display = document.getElementById("display");


function upload(data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://zinoui.com/demo/progress-bar/upload.php", true);

    if (xhr.upload) {
        xhr.upload.onprogress = function (e) {
            if (e.lengthComputable) {
                progressBar.max = e.total;
                progressBar.value = e.loaded;
                display.innerText = Math.floor((e.loaded / e.total) * 100) + '%';
            }
        }
        xhr.upload.onloadstart = function (e) {
            progressBar.value = 0;
            display.innerText = '0%';
        }
        xhr.upload.onloadend = function (e) {
            progressBar.value = e.loaded;
            loadBtn.disabled = false;
            loadBtn.innerHTML = 'Start uploading';
        }
    }
    xhr.send(data);
}

function buildFormData() {
    var fd = new FormData();

    for (var i = 0; i < 3000; i += 1) {
        fd.append('data[]', Math.floor(Math.random() * 999999));
    }

    return fd;
}

loadBtn.addEventListener("click", function (e) {
    this.disabled = true;
    this.innerHTML = "Uploading...";
    upload(buildFormData());
});
