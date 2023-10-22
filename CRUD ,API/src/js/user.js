const dang_ky = () => {
    //b1 : lấy dữ liệu
    const email = document.querySelector('#exampleInputEmail1').value;
    const password = document.querySelector('#exampleInputPassword1').value;
    console.log(email, password);
    const user = {
        email,
        password
    }
    //b2:thêm tài khoản vào api
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { "Content-Type": "application/json", },
        body : JSON.stringify(user)
    })
}