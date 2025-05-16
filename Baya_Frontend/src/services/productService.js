

import "../services/ApiConFig"
import instandURL from "../services/ApiConFig";


let table;
$(document).ready(function () {

    fetch(instandURL + '/admin/product/')
        .then(response => response.json())
        .then(data => {
            console.log(data)


            table = $('#myTable').DataTable({

                data: data.list,

                columns: [

                    {
                        title: 'STT',
                        data: null,
                        render: function (data, type, row, meta) {
                            return meta.row + 1; // Tạo số thứ tự tự động
                        }
                    },
                    {
                        data: 'name' // Ánh xạ với trường "name" trong dữ liệu
                    },
                    {
                        title: 'Giá bán',
                        data: 'price' // Ánh xạ với trường "price"
                    },
                    {
                        title: 'Danh mục',
                        data: 'categoryID.name' // Ánh xạ với trường "categoryID.name"
                    },
                    {
                        title: 'Đã bán',
                        data: 'quantitySell' // Ánh xạ với trường "quantitySell"
                    },
                    {
                        title: 'Còn tồn kho',
                        data: 'quantityStock' // Ánh xạ với trường "quantityStock"
                    },
                    {
                        title: 'Sửa',
                        data: 'productID', // Dùng "productID" để tạo nút chỉnh sửa
                        render: function (data, type, row) {
                            return `
                            <button class="btn btn-outline-warning btn-edit" onclick="edit_btn(${data})" data-toggle="modal" data-id="${data}">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>`;
                        }
                    },
                    {
                        title: 'Xóa',
                        data: 'productID', // Dùng "productID" để tạo nút xóa
                        className: 'd-none d-md-table-cell text-center',
                        render: function (data, type, row) {
                            return `
                            <button class="btn btn-outline-danger btn-delete" onclick="remove_btn(${data})" data-userid="${data}">
                                <i class="fa-solid fa-trash" aria-hidden="true"></i>
                            </button>`;
                        }
                    }

                ]
            });
        })
});
