const id = new URLSearchParams(window.location.search).get('id');
const showProductId = () => {
    const update = document.querySelector('.update');
    fetch(`http://localhost:3000/Products/${id}`)
        .then(response => response.json())
        .then((data) => {
            update.innerHTML = `
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="text" class="form-control name" id="exampleInputEmail1" aria-describedby="emailHelp" value="${data.name}">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Price</label>
            <input type="number" class="form-control price" id="exampleInputPassword1"  value="${data.price}">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Description</label>
            <input type="text" class="form-control description" id="exampleInputPassword1"  value="${data.description}">
        </div>
        <button type="submit" class="btn btn-primary" onclick="updateProduct(${id})">Submit</button>
            `
        })
}
showProductId()
const updateProduct = (id) => {
    const name = document.querySelector('.name').value;
    const price = document.querySelector('.price').value;
    const description = document.querySelector('.description').value;
    const dataUpdate = {
        name,
        price,
        description
    }
    //update dữ liệu trên API
    fetch(`http://localhost:3000/Products/${id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(dataUpdate)
    })
    window.location.href = 'dashboard.html';
}