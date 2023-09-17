//FOR - Vòng Lặp
// for(var i=0; i<10 ; i++) {}
//ES6 - for of
// const arr = [1, 2, 3, 4, 5, 6, 7, "cuong", "bảo"];

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]); //1,2,3,4,5,6,7
// }
// console.log("-------");

// for (let item of arr) {
//     console.log(item); //1,2,3,4,5,6,7
// }

//ES6 - `` - template string
const app = document.querySelector('.app'); // liên kêt đến thẻ có class là app bên html bằng DOM
const age = 24;
// app.innerHTML = '  <h1>Cuong</h1><p>'+age+'</p > ';
app.innerHTML = `  <h1>Cuong</h1>
                    <p>${age}</p>`
//ES5 - filter - Lọc mảng
// từ 1 mảng cũ tạo ra 1 mảng mới kèm theo điều kiện và trong mảng mới có các giá trị là true

// for (let item of arr) {
//     if (item < 4) {
//         console.log(item);
//     }
// }
const arr = [1, 2, 3, 4, 5, 6, 7, "cuong", "bảo",2];
let newArr = arr.filter(function (item) { return item % 2 == 0 })
//function- callback : thực hiện duyệt qua mảng và kiểm tra từng phần tử trong mảng với điều kiện đã cho 
// và trả về các giá trị thỏa mãn điều kiện
// trong hàm filter nhận vào 1 callback 
console.log(newArr);

// cho 1 mảng tự tạo và từ mảng đó tạo ra 1 mảng mới có các giá trị chẵn
//- 1 mảng
//sử dụng filter
// truyền vào trong callback điều kiện muốn thực hiện

// ES6 - find - lọc 
// - từ 1 mảng cũ lọc ra 1 giá trị mới  thỏa mãn điều kiện
let newFind = arr.find((item) => item == 2 )
console.log("find" , newFind);
// ES6 - arrow function - hàm  mũi tên
//cú pháp cũ
// function sum (a,b) {
//     return a+b
// }
//cú pháp mới
// nếu chức năng có 1 bước làm ta có thể viết gọn
const sum = (a,b) => a+b
//cú pháp của arrow function : 
// const tên chức năng = () =>{}

// 4 : ES6 - CRUD -localStorage - API