document.getElementById("btntxt").addEventListener("click", MakeRequest);

//Onload 
function MakeRequest() {
    console.log('click')
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);
    xhr.withCredentials = true;
    xhr.responseType = "text";
    xhr.setRequestHeader("Content-Type", "application/text");
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.info('XHR Object:', xhr);
            console.info('XHR responseText:', xhr.responseText);
            console.info('XHR statusText:', xhr.statusText);
            console.info('XHR responseText:', xhr.responseText);
            console.info('XHR responseURL:', xhr.responseURL);
            console.info('XHR responseType:', xhr.responseType);
            console.info('XHR withCredentials:', xhr.withCredentials);
            console.info('XHR Content-Type:', xhr.getResponseHeader("Content-Type"));
            console.info('XHR getAllResponseHeaders:', xhr.getAllResponseHeaders());
        }
        else {
            console.error("Error: " + xhr.status);
        }
    }

    xhr.send();
}