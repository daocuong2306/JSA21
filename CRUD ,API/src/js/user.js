const dang_ky = () => {
    // B1: Lấy giá trị được nhập vào từ 2 ô input 
    const email = document.querySelector(".email").value
    const password = document.querySelector(".password").value
    const data = {
        name: email,
        password: password,
        role: 2
    }
    // b2: call api 
    fetch("  http://localhost:3000/Users", {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data)
    })
    alert("Đăng kí thành công");
   
    window.location.href = "dang_nhap.html";
}


const dang_nhap = () => {
    const email = document.querySelector(".email").value
    const password = document.querySelector(".password").value
    fetch("http://localhost:3000/Users")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (let user of data) {
                if ((email == user.name) && (password == user.password)) {
                    localStorage.setItem("user" , JSON.stringify(user))
                    window.location.href = "index.html";
                    return;
                }
            }
            alert("đăng nhập thất bại");
        })
}