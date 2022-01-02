document.getElementById('btn').addEventListener('click', MakeRequest);
function MakeRequest() {
    console.log('Button Clicked')
    const xhr = new XMLHttpRequest();

    if (xhr.readyState === 0) {
        console.log('Open Method Not Yet Call.....', xhr.readyState)
    }

    xhr.open('GET', 'data.txt', true);

    if (xhr.readyState === 1) {
        console.log('Open Method Called.....', xhr.readyState)
    }

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(xhr.responseText)
            } else {
                console.log("Error:" + xhr.status)
            }
        }

        if (xhr.readyState === 2) {
            console.log('Response Header.....', xhr.readyState)
        }
        if (xhr.readyState === 3) {
            console.log('Loding.....', xhr.readyState)
        }
        if (xhr.readyState === 4) {
            console.log('Done.....', xhr.readyState)
        }



    }
    xhr.send();
}