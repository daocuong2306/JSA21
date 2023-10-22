// CREATE
//tạo 1 chức năng
const addProduct = () => {
    //lây dữ liệu từ phía html(DOM element)
    //chỉ muốn lấy giá trị : .value
    let name = document.querySelector('.name').value;
    let price = document.querySelector('.price').value;
    const data = {
        name,
        price
    }
    //thêm sản phẩm vào api
    //fetc(string , object)
    // string : url api muốn thêm vào
    // object : method , headers , body
    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    window.location.href = 'dashboard.html'
}
//GET /products 

const showProducts = () => {
    //tìm chỗ muốn show
    let show = document.querySelector('.show');
    //kiểm tra
    if (show) {
        //lấy dữ liệu từ api muốn hiển thị
        fetch(' http://localhost:3000/products')
            .then(response => response.json())
            .then((data) => {
                for (let product of data) {
                    show.innerHTML += `
                    <tr>
                        <th scope="row">${product.id}</th>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>
                        <button type="button" class="btn btn-danger" onClick='deleteProduct(${product.id})'>Xóa</button>
                        </td>
                    </tr>
                    `
                }
            })
    }
}
showProducts()
const deleteProduct = (id) => {
    const check = window.confirm("are fucking sure");
    if (check) {
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE'
        })
    }
}

