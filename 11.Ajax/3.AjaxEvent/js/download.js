let progressBar = document.getElementById("progress");
let loadBtn = document.getElementById("button");
let display = document.getElementById("display");

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://zinoui.com/demo/progress-bar/test.csv?" + Math.floor(Math.random() * 99999), true);
xhr.responseType = "text";
xhr.onprogress = function (e) {
    if (e.lengthComputable) {
        progressBar.max = e.total;
        progressBar.value = e.loaded;
    }
};
xhr.onloadstart = function (e) {
    progressBar.value = 0;
};
xhr.onloadend = function (e) {
    progressBar.value = e.loaded;
};
xhr.send(null);

loadBtn.addEventListener("click", function (e) {
    this.disabled = true;
    this.innerHTML = "Downloading...";
    onprogress();
});