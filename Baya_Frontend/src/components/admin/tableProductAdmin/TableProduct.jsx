import { useEffect } from "react";
import instandURL from "../../../services/ApiConFig";

const TableProduct = ({ refreshTrigger }) => {
    useEffect(() => {
        let table;

        fetch(instandURL + `/admin/product/`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Data from API:", data);

                // Destroy existing DataTable if it exists
                if ($.fn.DataTable.isDataTable("#myTable")) {
                    $("#myTable").DataTable().clear().destroy();
                }

                // Initialize new DataTable
                table = $("#myTable").DataTable({
                    data: data,
                    columns: [
                        {
                            title: "STT",
                            data: null,
                            render: function (data, type, row, meta) {
                                return meta.row + 1;
                            },
                        },
                        {
                            title: "Tên sản phẩm",
                            data: "name",
                        },
                        {
                            title: "Danh mục",
                            data: "category.name",
                        },
                        {
                            title: "Giảm giá",
                            data: "discountDefault",
                        },
                        {
                            title: "Giá bán",
                            data: null,
                            render: function (data, type, row) {
                                return row.price.toLocaleString("vi-VN") + " ₫";
                            },
                        },
                        {
                            title: "Đã bán",
                            data: "quanlitySell",
                        },
                        {
                            title: "Còn tồn kho",
                            data: "quanlityStock",
                        },
                        {
                            title: "Sửa",
                            data: "productID",
                            render: function (data) {
                                return `
                                <button class="btn btn-outline-warning btn-edit" onclick="edit_btn(${data})">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>`;
                            },
                        },
                        {
                            title: "Xóa",
                            data: "productID",
                            className: "d-none d-md-table-cell text-center",
                            render: function (data) {
                                return `
                                <button class="btn btn-outline-danger btn-delete" onclick="remove_btn(${data})">
                                    <i class="fa-solid fa-trash" aria-hidden="true"></i>
                                </button>`;
                            },
                        },
                    ],
                });
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });

        // Cleanup: Destroy DataTable on component unmount
        return () => {
            if (table) {
                table.destroy(true);
            }
        };
    }, [refreshTrigger]); // Add refreshTrigger to dependency array

    return (
        <>
            <div className="row">
                <div className="col-12 col-lg-12 col-xxl-12 d-flex">
                    <div className="card flex-fill">
                        <table
                            className="table pt-2 mt-3 table-bordered table-striped"
                            id="myTable"
                        >
                            <thead className="table-dark">
                                <tr>
                                    <th style={{ width: "5%" }}>STT</th>
                                    <th className="d-none d-md-table-cell">Tên sản phẩm</th>
                                    <th className="d-none d-md-table-cell">Danh mục</th>
                                    <th className="d-none d-md-table-cell">Giảm giá</th>
                                    <th className="d-none d-md-table-cell">Giá bán</th>
                                    <th className="d-none d-md-table-cell">Đã bán</th>
                                    <th className="d-none d-md-table-cell">Còn tồn kho</th>
                                    <th style={{ width: "5%" }}>Sửa</th>
                                    <th style={{ width: "5%" }}>Xóa</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableProduct;