

const successSwall = (message) => {

    Swal.fire({
        title: "Chúc mừng",
        icon: "success",
        text: message,
        draggable: true
    });

}
const errorSwall = (message) => {
    Swal.fire({
        icon: "error",
        title: "Đã xảy ra lỗi",
        text: message,

    });
}

export { successSwall, errorSwall }