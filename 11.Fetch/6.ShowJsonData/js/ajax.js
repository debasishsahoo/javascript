document.getElementById("btntxt").addEventListener("click", MakeRequest);
let tt = document.getElementById("td-data");
//Onload 
// function MakeRequest() {
//     console.log('click')
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "data.json", true);
//     xhr.responseType = "json";
//     xhr.onload = () => {
//         if (xhr.status === 200) {
//             //console.info(xhr.response);
//             let products = xhr.response;
//             let tableopen = "<table border='1'>";
//             let tableclose = '</table>';
//             let theaderopen = '<theader>';
//             let theaderclose = '</theader>';
//             let tbodyopen = '<tbody>';
//             let tbodyclose = '</tbody>';
//             let thopen = '<th>';
//             let thclose = '</th>';
//             let tropen = '<tr>';
//             let trclose = '</tr>';
//             let tdopen = '<td>';
//             let tdclose = '</td>';
//             let tableheader = '';
//             let tablebody = '';

//             tableheader += `
//                           ${theaderopen}
//                           ${tropen}
//                           ${thopen}id${thclose}
//                           ${thopen}title${thclose}
//                           ${thopen}price${thclose}
//                           ${thopen}description${thclose}
//                           ${thopen}category${thclose}
//                           ${thopen}image${thclose}
//                           ${trclose}
//                           ${theaderclose}`;

//             for (let i = 0; i < products.length; i++) {
//                 tablebody += `${tropen}
//                                 ${tdopen}${products[i].id}${tdclose}
//                                 ${tdopen}${products[i].title}${tdclose}
//                                 ${tdopen}${products[i].price}${tdclose}
//                                 ${tdopen}${products[i].description}${tdclose}
//                                 ${tdopen}${products[i].category}${tdclose}
//                                 ${tdopen}${products[i].image}${tdclose}
//                                 ${trclose}`;

//             }
//             tt.innerHTML = tableopen + tableheader + tbodyopen + tablebody + tbodyclose + tableclose;
//         }
//         else {
//             console.error("Error: " + xhr.status);
//         }
//     }
//     xhr.send();
// }

function MakeRequest() {
    console.log('click')
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            //console.info(xhr.response);
            let products = JSON.parse(xhr.response);
            let tableopen = '<table border="1">';
            let tableclose = '</table>';
            let theaderopen = '<theader>';
            let theadeclose = '</theader>';
            let tbodyopen = '<tbody>';
            let tbodyclose = '</tbody>';
            let trowopen = '<tr>';
            let trowclose = '</tr>';
            let tcolopen = '<td>';
            let tcolclose = '</td>';
            let tabledata = '';
            products.forEach(product => {
                tabledata += `${trowopen}
                                 ${tcolopen}${product.id}${tcolclose}
                                 ${tcolopen}${product.title}${tcolclose}
                                 ${tcolopen}${product.price}${tcolclose}
                                 ${tcolopen}${product.description}${tcolclose}
                                 ${tcolopen}${product.category}${tcolclose}
                                 ${tcolopen}${product.image}${tcolclose}
                                 ${tcolopen}${product.rating.rate}${tcolclose}
                                 ${tcolopen}${product.rating.count}${tcolclose}
                                 ${trowclose}`;
            });
            tt.innerHTML = `${tableopen}
                            ${theaderopen}
                            ${trowopen}
                            ${tcolopen}ID${tcolclose}
                            ${tcolopen}Title${tcolclose}
                            ${tcolopen}Price${tcolclose}
                            ${tcolopen}Description${tcolclose}
                            ${tcolopen}Category${tcolclose}
                            ${tcolopen}Image${tcolclose}
                            ${tcolopen}Rating${tcolclose}
                            ${tcolopen}Rating Count${tcolclose}
                            ${trowclose}
                            ${theadeclose}
                            ${tbodyopen}
                            ${tabledata}
                            ${tbodyclose}
                            ${tableclose}`;
        }
        else {
            console.error("Error: " + xhr.status);
        }
    }
    xhr.send();
}