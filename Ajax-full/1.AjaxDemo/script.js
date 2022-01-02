document.getElementById('btn').addEventListener('click', MakeRequest);


function MakeRequest() {
    console.log('Button Clicked')
    //Create XMLHttpRequest Object
    const xhr = new XMLHttpRequest();
    //Open the Configure the request
    //GET is the Method  for Fatching The Data Request and data Read
    //URL is the URL of the data.txt
    //true is the Async Request
    xhr.open('GET', 'data.txt', true);
    //implement the onreadyState Change event
    xhr.onreadystatechange = ShowData;

    function ShowData() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                //console.log(xhr)
                console.log(xhr.responseText)
            } else {
                console.log("Error:" + xhr.status)
            }
        }
    }
    //Send the request
    //this is basiscaly the same as the click event and it will open the file and read it
    xhr.send();
}