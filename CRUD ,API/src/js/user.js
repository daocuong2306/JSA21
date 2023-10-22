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
        body: JSON.stringify(user)
    })
}

const dang_nhap = () => {
    // b1 : lấy data được nhập
    const email = document.querySelector('#exampleInputEmail1').value;
    const password = document.querySelector('#exampleInputPassword1').value;
    // b2 : lấy dứ liệu từ api.user 
    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            // b3: so sánh
            for (let user of data) {
                if ((user.email == email) && (user.password == password)) {
                    window.location.href = 'dashboard.html';
                    return;
                }
            }
            alert("sai tk hoặc mk")
        })
}