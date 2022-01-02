document.getElementById("btntxt").addEventListener("click", MakeRequest);

//Fatch Function explanation
// function MakeRequest() {
//     console.log('Button Clicked');
//     const PromiseObject = fetch("data.txt")
//     console.log('Status of Promise Object......')
//     console.log(PromiseObject);

//     PromiseObject.then(function (response) {
//         console.log('Response from Promise Object......');
//         console.log(response);
//         return response.text();
//     }).then(function (data) {
//         console.log('Data from Promise Object......');
//         console.log(data);
//         document.getElementById("txt").innerHTML = data;
//     }).catch(function (error) {
//         console.log('Error from Promise Object......');
//         console.log(error);
//     });
// }

//Fetch Arrow function
// function MakeRequest() {
//     console.log('Button Clicked');
//     fetch("data1.txt").then((response) => {
//         return response.text();
//     }).then((data) => {
//         console.log(data);
//     }).catch((error) => {
//         console.log(error);
//     });
// }

//Fetch Error handiling
// function MakeRequest() {
//     console.log('Button Clicked');
//     fetch("data.txt").then((response) => {
//         if (!response.ok) {
//             throw Error(response.statusText);
//         }
//         return response.text();
//     }).then((data) => {
//         console.log(data);
//         document.getElementById("txt").innerHTML = data;
//     }).catch((error) => {
//         console.log(error);
//     });
// }


//Asyanc Await
// async function MakeRequest() {
//     console.log('Button Clicked');
//     const response = await fetch("data.txt");
//     console.log('Status of Promise Object with await......')
//     console.log(response);
//     const data = await response.text();
//     console.log('Data from Promise Object with await......');
//     console.log(data);
//     document.getElementById("txt").innerHTML = data;

// }

//Asyanc Await with Error handinling
async function MakeRequest() {
    try {
        console.log('Button Clicked');
        const response = await fetch("data1.txt");
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const data = await response.text();
        console.log(data);
        document.getElementById("txt").innerHTML = data;
    }
    catch (error) {
        console.log(error);
    }
}