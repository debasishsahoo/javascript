document.getElementById("btntxt").addEventListener("click", MakeRequest);

//Onload 
function MakeRequest() {
    console.log('Button click')
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "2mb.txt", true);
    xhr.timeout = 11;
    xhr.onload = () => {
        if (xhr.status === 200) {
            //console.info(xhr.responseText);
            console.log('Data Loaded')
        }
        else {
            console.error("Error: " + xhr.status);
        }
    }
    xhr.onprogress = (e) => {
        console.log('e.loaded:', e.loaded);
        console.log('e.total:', e.total);
    }
    xhr.onerror = () => {
        console.log('Network Not Available.........');
    }
    xhr.onloadstart = () => {
        console.log('Request or Transaction Started...........');
    }
    xhr.onloadend = () => {
        console.log('Request or Transaction Ended...........');
    }
    xhr.onabort = () => {
        console.log('Request or Transaction Aborted...........');
    }
    xhr.ontimeout = () => {
        console.log('Timeout Done........');
    }
    xhr.send();
}