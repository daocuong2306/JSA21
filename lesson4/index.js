// localStorage - một biến lưu trữ của máy tính


// localStorage.setItem('product' , 1); // lưu trữ và đẩy dữ liệu lên local gồm có key('prodcut') và value(1)
// localStorage.getItem('product'); // lấy dữ liệu từ local xuông trang js và sử dung , để lấy xuống ta gọi đến tên key('product) mà ta muốn lấy
// localStorage.removeItem('product'); //xóa dữ liệu của local bằng key('product');
// localStorage.clear(); // xóa toàn bộ local

const product = {
    name: 'cuong',
    age: 25
}
// localStorage.setItem('products', product)
// const dataLocal = localStorage.getItem('products');
// console.log(product);
// console.log(dataLocal);
//khi giá trị đang là array hoặc OBJ thì chúng ta có 1 phương thức để đấy lên local
//-Phương thức : LocalStorage.setItem('products', JSON.stringify());
localStorage.setItem('products', JSON.stringify(product));
//khi giá trị trên local storage là 1 array hoặc OBJ thì chúng ta có 1 phương thức để lấy về
//Phương thưc: let biến = JSON.parse(localStorage.getItem('');
// let data = localStorage.getItem('products');
let data1 = JSON.parse(localStorage.getItem('products'))
console.log(data1);

const data = [
    {
        id: 1,
        name : 'product 1',
        price : 2000,
        image : 'https://tronhouse.com/assets/data/editor/source/nhung-cach-chup-hinh-quan-ao-duoc-uu-chuong-nhat/chup-hinh-sang-tao-1.jpg'
    },
    {
        id: 2,
        name : 'product 2',
        price : 1000,
        image : 'https://mabustudio.com/?attachment_id=3204'
    },
    {
        id: 3,
        name : 'product 3',
        price : 4000,
        image : 'https://htmediagroup.vn/wp-content/uploads/2021/12/Ao-pijama-11-min.jpg'
    },
    {
        id: 4,
        name : 'product 4',
        price : 5000,
        image : 'https://tcorder.vn/wp-content/uploads/2015/12/ao-thun-nam-ca-tinh-thoi-trang-2.jpg'
    }
]