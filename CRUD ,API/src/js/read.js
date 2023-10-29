//READ - Hiển thị
const READ = (data) => {
    // tìm đến chỗ muốn hiển thị
    const read = document.querySelector('tbody');
    // sử dụng api để lấy dữ liệu
    fetch(`http://localhost:3000/${data}`)
        .then(response => response.json())
        .then((datas) => {
            for (let product of datas) {
                read.innerHTML += `
                    <tr>
                        <th scope="row">${product.id}</th>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>${product.description}</td>
                        <td><button type="button" class="btn btn-danger" onClick="deleteProduct(${product.id})">Xóa</button></td>
                    </tr>
                `
            }
        })
};
//gọi hàm read để sử dụng
READ("Products")
//DELETE
const deleteProduct = (id) => {
    const check = window.confirm("bạn có chắc chắn muốn xóa sản phẩm không ?");
    if (check) {
        fetch(`http://localhost:3000/Products/${id}`, {
            method: 'DELETE',
        })
        alert("xóa thành công")
    }
}