const add = () => {
    //liên kết đến các ô nhập giá trị
    let name = document.querySelector('.name').value;
    let price = document.querySelector('.price').value;
    let des = document.querySelector('.description').value;
    //tạo 1 biến chứa dữ liệu
    const data = {
        name: name,
        price: price,
        description: des
    }
    // thêm sản phẩm vào api
    fetch('http://localhost:3000/Products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    alert("thành công");
    window.location.href = 'dashboard.html'
};