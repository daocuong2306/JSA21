//READ
const data = [
    {
        id: 0,
        name: "product 1",
        image: 'https://inhat.vn/wp-content/uploads/2021/01/shop-quan-ao-nu-bien-hoa4.1.jpg',
        price: 200000
    },
    {
        id: 1,
        name: "product 2",
        image: 'https://inhat.vn/wp-content/uploads/2021/01/shop-quan-ao-nu-bien-hoa4.1.jpg',
        price: 100
    }
];

let products = JSON.parse(localStorage.getItem('dataProduct'));
console.log(products);
//có 1 chức năng thực hiện công việc
//các giá trị bên trong () được gọi là tham số và đc tạm thời sử dụng trong function
const showProduct = (data, app) => {
    app.innerHTML = '';
    //sử dụng for để sử lí từng phần tử
    for (let product of data) {
        app.innerHTML += `
        <tr>
            <th scope="row">${product.id}</th>
            <td>${product.name}</td>
            <td>@${product.price}</td>
            <td><button class="btn btn-danger" onclick='deleteProduct(${product.id})'>Xóa</button></td>
        </tr>
    `
    }
}
//  //tìm đến chỗ muốn hiện thị
let hot = document.querySelector('.app');
showProduct(products, hot)


//Array
// push - thêm 1 phần tử vào trong array
const arrayA = [1, 2, 3, 4];
arrayA.push({
    name: "cuong",
    price: 1000
});
console.log(arrayA);

//Create

const addProduct = () => {
    //Sử dụng DOM để liên kết và lấy dữ liệu từ html
    let name = document.querySelector('.name').value;
    let price = document.querySelector('.price').value;
    data.push({ id: data.length, name, price }) //{ id: data.length, name : name, price:price }
    localStorage.setItem('dataProduct', JSON.stringify(data))
    let hot = document.querySelector('.app');
    showProduct(data, hot)
}

//DELETE


const deleteProduct = (id) => {
    let arrayNew = data.filter((item) => item.id !== id)
    // let data = arrayNew;
    let hot = document.querySelector('.app');
    showProduct(arrayNew, hot)
}


//Nối chuỗi
const a = [1, 2, 3, 4, 5];
const b = ['cuong', 2];

const c = [a, b];
console.log(c);

