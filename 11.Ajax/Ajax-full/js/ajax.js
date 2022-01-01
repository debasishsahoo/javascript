document.getElementById("btntxt").addEventListener("click", MakeRequest);

// function MakeRequest() {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "data1.txt", true);
//     xhr.onreadystatechange = ShowData;

//     function ShowData() {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 console.info(xhr);
//                 console.info(xhr.responseText);

//             } else {
//                 console.error("Error: " + xhr.status);
//             }
//         }
//     };
//     xhr.send();
// }

function MakeRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.info(xhr);
                console.info(xhr.responseText);

            } else {
                console.error("Error: " + xhr.status);
            }
        }
    };
    xhr.send();
}


