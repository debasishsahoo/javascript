document.getElementById("btntxt").addEventListener("click", MakeRequest);

//Onload 
function MakeRequest() {
    console.log('click')
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.info(xhr.responseText);
        }
        else {
            console.error("Error: " + xhr.status);
        }
    }
    xhr.send();
}