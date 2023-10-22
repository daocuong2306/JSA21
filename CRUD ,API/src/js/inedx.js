const fileInput = document.querySelector("#file-input");
const image = document.querySelector("#image");
fileInput.addEventListener("change", (e) => {
    // Lấy ra file được chọn
    const file = e.target.files[0];
    // Lấy ra đường link của file
    const imgUrl = URL.createObjectURL(file);
    // Lưu trữ đường link vào biến img
    let img = imgUrl;
});;