// tạo 1 biến kiểm tra user xem đã đăng nhập chưa
const user = JSON.parse(localStorage.getItem('user'));
console.log(user);
if (user) {
    const btn = document.querySelector('.btn');
    btn.innerHTML = `
    <p>Name :  ${user.name}</p>
    
    `
} else {
    const btn = document.querySelector('.btn');
    btn.innerHTML = `
    <button>Đăng nhập</button>
    <button>Đăng ký</button>
    
    `

}

if (user.role != 2) {
    const admin = document.querySelector('.admin');
    admin.innerHTML = `<p>Bạn không phải là admin</p>`
} 