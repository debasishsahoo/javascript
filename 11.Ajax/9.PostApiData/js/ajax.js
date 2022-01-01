document.getElementById("btntxt").addEventListener("click", MakeRequest);

//Onload 
function MakeRequest() {
    console.log('click')
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.info(xhr.response);
        }
        else {
            console.error("Error: " + xhr.status);
        }
    }
    mydata = { "name": "Debasish", "salary": "12300000000", "age": "38" }
    xhr.send(mydata);
}