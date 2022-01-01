document.getElementById("btntxt").addEventListener("click", MakeRequest);
let xmltable = document.getElementById("xmltable");

//Onload 
function MakeRequest() {
    console.log('click')
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.xml", true);
    xhr.responseType = "document";
    xhr.onload = () => {
        if (xhr.status === 200) {
            const xmlDoc = xhr.responseXML;
            const catalog = xmlDoc.getElementsByTagName("catalog");
            const books = catalog[0].getElementsByTagName("book");


            //console.info(xhr.response);
            //console.info(xhr.response.getElementsByTagName("catalog"));
            //console.info(xhr.response.getElementsByTagName("catalog")[0]);
            // console.info(
            //     xhr.response.getElementsByTagName("catalog")[0]
            //         .getElementsByTagName("book")[0]
            // );
            // console.info(
            //     xhr.response.getElementsByTagName("catalog")[0]
            //         .getElementsByTagName("book")[0]
            //         .getElementsByTagName("title")[0]

            // );
            // console.info(
            //     xhr.response.getElementsByTagName("catalog")[0]
            //         .getElementsByTagName("book")[0]
            //         .getElementsByTagName("title")[0]
            //         .childNodes[0]

            // );
            console.info(
                xhr.response.getElementsByTagName("catalog")[0]
                    .getElementsByTagName("book")[1]
                    .getElementsByTagName("title")[0]
                    .childNodes[0].nodeValue

            );
            let tableopen = `<table border="1">`;
            let tableclose = `</table>`;
            let tableheadopen = `<thead>`;
            let tableheadclose = `</thead>`;
            let tablebodyopen = `<tbody>`;
            let tablebodyclose = `</tbody>`;
            let trowopen = `<tr>`;
            let trowclose = `</tr>`;
            let tcolopen = `<td>`;
            let tcolclose = `</td>`;
            let thopen = `<th>`;
            let thclose = `</th>`;
            let tbody = ``;
            let thead = ``;

            thead += `${trowopen}`
                + `${thopen}Author${thclose}`
                + `${thopen}Title${thclose}`
                + `${thopen}genre${thclose}`
                + `${thopen}Price${thclose}`
                + `${thopen}publish_date${thclose}`
                + `${thopen}description${thclose}`
                + `${trowclose}`;

            for (let i = 0; i < books.length; i++) {
                tbody += `${trowopen}`
                    + `${tcolopen}${books[i].getElementsByTagName("author")[0].childNodes[0].nodeValue}${tcolclose}`
                    + `${tcolopen}${books[i].getElementsByTagName("title")[0].childNodes[0].nodeValue}${tcolclose}`
                    + `${tcolopen}${books[i].getElementsByTagName("genre")[0].childNodes[0].nodeValue}${tcolclose}`
                    + `${tcolopen}${books[i].getElementsByTagName("price")[0].childNodes[0].nodeValue}${tcolclose}`
                    + `${tcolopen}${books[i].getElementsByTagName("publish_date")[0].childNodes[0].nodeValue}${tcolclose}`
                    + `${tcolopen}${books[i].getElementsByTagName("description")[0].childNodes[0].nodeValue}${tcolclose}`
                    + `${trowclose}`;
            }

            xmltable.innerHTML = `${tableopen}
            ${tableheadopen}
            ${thead}
            ${tableheadclose}
            ${tablebodyopen}
            ${tbody}
            ${tablebodyclose}
            ${tableclose}`;

            // books.forEach(book => {
            //     let author = book.getElementsByTagName("author")[0].childNodes[0].nodeValue;
            //     let title = book.getElementsByTagName("title")[0].childNodes[0].nodeValue;
            //     let genre = book.getElementsByTagName("genre")[0].childNodes[0].nodeValue;
            //     let price = book.getElementsByTagName("price")[0].childNodes[0].nodeValue;
            //     let publish_date = book.getElementsByTagName("publish_date")[0].childNodes[0].nodeValue;
            //     let description = book.getElementsByTagName("description")[0].childNodes[0].nodeValue;

            //     xmltable.innerHTML += `<tr> 
            //     <td>${author}</td>
            //     <td>${title}</td>
            //     <td>${genre}</td>
            //     <td>${price}</td>
            //     <td>${publish_date}</td>
            //     <td>${description}</td>
            //     </tr>`
            // });















        }
        else {
            console.error("Error: " + xhr.status);
        }
    }
    xhr.send();
}