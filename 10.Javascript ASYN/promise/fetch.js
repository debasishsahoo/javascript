async function fdata() {
    const response = await fetch('http://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data)
}

fdata()