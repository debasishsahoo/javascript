document.getElementById("btntxt").addEventListener("click", MakeRequest);

//Onload 
function MakeRequest() {
    console.log('click')
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.info(xhr.response);
        }
        else {
            console.error("Error: " + xhr.status);
        }
    }
    xhr.send();
}