// CREATE
//tạo 1 chức năng
const addProduct = () => {
    //lây dữ liệu từ phía html(DOM element)
    //chỉ muốn lấy giá trị : .value
    let name = document.querySelector('.name').value;
    let price = document.querySelector('.price').value;
    const data = {
        name ,
        price
    }
    //thêm sản phẩm vào api
    //fetc(string , object)
    // string : url api muốn thêm vào
    // object : method , headers , body
    fetch('http://localhost:3000/product', {
        method: 'POST',
        headers:   { 'Content-Type': 'application/json'},
        body : JSON.stringify(data)
    })
}