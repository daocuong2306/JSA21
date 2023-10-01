//Các kiểu dữ liệu
// 1: Number / 10, 1.4, 1.5, 1.6, 1.7, 1.8
// 2: String / kiểu chữ  / 'cuong' , "hahah" , `10`
// 3: BooLean/ đúng - sai / true - false
// 4: undefined
// 5: null
// 6: Array/ Mảng - [] / index - bắt đầu từ số 0
//  - có thể chứa được tất các các kiểu dữ liệu kể cả chính nó
//  - VD : 
// let array = [1, [1, 2, 3], { ao_1: 'cuong', ao_2: 30 }];
// console.log(array);
// console.log(array[2].ao_1)
// 7: OBJ - Đối tượng / {} | key :value
// VD : 
// let obj = {3
//     ao_1: 'cuong',
//     ao_2: 30
// }
// console.log(obj.age);
// console.log(obj['age']);

// - Trong js có mấy kiểu dữ liệu cơ bản :  5 kiểu cơ bản


//IF ELSE | dùng để kiểm tra điều kiện 

// in ra màn hình các số chắn
let c = 0
// if (c % 2 == 0) {
//     console.log("số này là số chẵn");
// } else {
//     console.log("số này là số lẻ");
// }
// nếu k đúng if thì thực hiện else
// if (c == 0) {
//     console.log("số này là số 0");
// } else if (c % 2 == 0) {
//     console.log("số này là số chẵn");
// } else {
//     console.log("số này là số lẻ");
// }



// FOR - Vòng lặp - lập đi lập lại 1 công việc phải làm nhiều lần
//FOR thường được dùng để sử lí mảng 

let data = [
    {
        name: 'product 1',
        price: 2000
    },
    {
        name: 'product 2',
        price: 2000
    },
    {
        name: 'product 1',
        price: 2000
    },
    {
        name: 'product 2',
        price: 2000
    },
    {
        name: 'product 1',
        price: 2000
    },
    {
        name: 'product 2',
        price: 2000
    },
    {
        name: 'product 1',
        price: 2000
    },
    {
        name: 'product 2',
        price: 2000
    },
    {
        name: 'product 1',
        price: 2000
    },
    {
        name: 'product 2',
        price: 2000
    }]
// console.log(data);
// for(let i=0; i<data.length ; i++) {
//     console.log(data[i].name, data[i].price);
// }
//hiển thị ra màn hình log tên sản phẩm và giá tiền


//DOM - document object model | Là để liên kết và lấy dữ liệu cũng như truyền liệu và thay đổi dữ liệu bên html

const onClickInput = () =>{
    //để lấy được dữ liệu từ ô input
    let valueI = document.querySelector('.inp').value;
    console.log(valueI);
}