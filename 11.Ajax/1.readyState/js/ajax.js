document.getElementById("btntxt").addEventListener("click", MakeRequest);

//ready State Status Code
/* function MakeRequest() {
    console.log('click')
    const xhr = new XMLHttpRequest();
    console.log('Before Open:', xhr.readyState)
    xhr.open("GET", "data.txt", true);
    console.log('After Open:', xhr.readyState)
    xhr.onreadystatechange = () => {
        console.log('onreadystatechange:', xhr.readyState)
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                //console.info(xhr);
                console.info(xhr.responseText);

            } else {
                console.error("Error: " + xhr.status);
            }
        }
    };
    xhr.send();
} */

//ready State Status Code
function MakeRequest() {
    console.log('click')
    const xhr = new XMLHttpRequest();
    if (xhr.readyState === 0) {
        console.log('Open Method Not Yeat Called:', xhr.readyState)
    }
    xhr.open("GET", "data.txt", true);
    if (xhr.readyState === 1) {
        console.log('Open Method Called:', xhr.readyState)
    }
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 2) {
            console.log('Response Header:', xhr.readyState)
        }
        if (xhr.readyState === 3) {
            console.log('Loding.....:', xhr.readyState)
        }
        if (xhr.readyState === 4) {
            console.log('Done:', xhr.readyState)
        }
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                //console.info(xhr);
                console.info(xhr.responseText);

            } else {
                console.error("Error: " + xhr.status);
            }
        }
    };
    xhr.send();
}


