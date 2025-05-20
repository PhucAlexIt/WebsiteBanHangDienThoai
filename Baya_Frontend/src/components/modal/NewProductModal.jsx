


import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListCategory from '../admin/listCategoryAdmin/ListCategory';
import instandURL from "../../services/ApiConFig"
import { errorSwall, successSwall } from "../../services/Swall"
import TableProduct from "../admin/tableProductAdmin/TableProduct"

const NewProductModal = ({ isOpen, onClose, onSubmit }) => {
    // 18.1.1.24 State formData lưu trữ tất cả thông tin Admin đã nhập.
    const [formData, setFormData] = useState({
        name: '',
        img: '',
        price: '',
        category: {
            id: '',
            name: ''
        },
        discountDefault: '',
        description: '',
        quanlityStock: '',
    });
    // 18.1.1.12 useEffect  reset state formData về giá trị mặc định
    useEffect(() => {
        if (isOpen) {
            setFormData({
                name: '',
                img: '',
                price: '',
                category: {
                    id: '',
                    name: ''
                },
                discountDefault: '',
                description: '',
                quanlityStock: '',
            });
        }
    }, [isOpen]);
    // 18.1.1.22 handleFormChange() cập nhật state formData mỗi khi giá trị các trường thay đổi khi admin nhập vào.
    const handleFormChange = (e) => {

        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    // 18.1.1.23 Hàm handleCategoryChange() cập nhật category trong formData bằng cách lấy giá trị từ e.target.value
    const handleCategoryChange = (e) => {
        const { id, name } = e.target.value;
        setFormData((prev) => ({
            ...prev,
            category: { id, name },
        }));
    };
    // 18.1.4.0 Hàm validateImageUrl() kiểm tra url mà Admin nhập vào.
    const validateImageUrl = (url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = url;

            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
        });
    };




    const validateFormData = async () => {
        const { name, img, price, category, discountDefault, description, quanlityStock } = formData;
        // 18.1.2.0 Kiểm tra thấy trường tên sản phẩm không hợp lệ.
        if (!name.trim()) {
            // 18.1.2.1 Hiển thị thông báo “Tên sản phẩm không được để trống” bằng hàm errorSwall().
            errorSwall("Tên sản phẩm không được để trống.");
            return false;
        }
        // 18.1.3.0 Kiểm tra thấy trường hình ảnh sản phẩm bị bỏ trống.
        if (!img.trim()) {
            // 18.1.3.1 Hiển thị thông báo “Ảnh sản phẩm không được bỏ trống.”  bằng hàm errorSwall().
            errorSwall("Ảnh sản phẩm không được để trống.");
            return false;
        }
        // 18.1.4.0 Hàm validateImageUrl() kiểm tra url mà Admin nhập vào.

        if (!(await validateImageUrl(img))) {
            // 18.1.4.1 Hiển thị thông báo “URL không hợp lệ và không phải là ảnh.” bằng hàm errorSwall().
            errorSwall("URL không hợp lệ hoặc không phải là ảnh.");
            return false;
        }

        // 18.1.5.0 Kiểm tra thấy giá sản phẩm không hợp lệ
        if (!price || isNaN(price) || Number(price) <= 0) {
            // 18.1.5.1 Hiển thị thông báo “Giá sản phẩm không hợp lệ.”  bằng hàm errorSwall().
            errorSwall("Giá sản phẩm không hợp lệ");
            return false;
        }
        // 18.1.6.0 Kiểm tra thấy trường danh mục sản phẩm bị bỏ trống.
        if (!category.id || !category.name) {
            // 18.1.6.1 Hiển thị thông báo “Danh mục sản phẩm không được để trống.” bằng hàm errorSwall().
            errorSwall("Danh mục sản phẩm không được để trống.");
            return false;
        }
        // 18.1.9.0 Kiểm tra thấy giảm giá không hợp lệ.
        if (discountDefault === '' || isNaN(discountDefault) || Number(discountDefault) < 0 || Number(discountDefault) > 100) {
            //    18.1.9.1 Hiển thị thông báo “Giảm giá không hợp lệ.” bằng hàm errorSwall().
            errorSwall("Trường thông tin giảm giá chưa hợp lệ");
            return false;
        }
        // 18.1.8.0 Kiểm tra thấy mô tả không hợp lệ.
        if (!description.trim()) {
            // 18.1.8.1 Hiển thị thông báo “Mô tả sản phẩm không được để trống.” bằng hàm errorSwall().
            errorSwall("Mô tả sản phẩm không được để trống.");
            return false;
        }
        // 18.1.7.0 Kiểm tra thấy số lượng hàng không hợp lệ.
        if (!quanlityStock || isNaN(quanlityStock) || Number(quanlityStock) < 0) {
            // 18.1.7.1 Hiển thị thông báo “Số lượng tồn kho không hợp lệ.” bằng hàm errorSwall().
            errorSwall("Số lượng hàng đang có chưa hợp lệ.");
            return false;
        }


        return true;
    };


    const handleSubmit = async () => {
        // 18.1.1.26 Hàm handleSubmit()  gọi validateFormData() để kiểm tra tính hợp lệ của dữ liệu
        const validate = await validateFormData();

        if (validate) {
            try {
                // 18.1.1.27 handleSubmit() gửi yêu cầu POST tới endpoint /admin/product/ với body là formData.
                const response = await fetch(instandURL + '/admin/product/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData),
                });

                if (response.status === 201) {
                    //   18.1.1.33 gọi hàm onSubmit (truyền từ ProductAdmin) để thông báo rằng sản phẩm đã được thêm.
                    onSubmit(formData);
                    //   18.1.1.36 hiển thị thông báo “Đã thêm thành công” bằng hàm successSwall().
                    successSwall("Đã thêm thành công");
                    return;
                }
                if (response.status === 500) {
                    // 18.1.10.1. Hiển thị thông báo “Đã xảy ra lỗi Server. Vui lòng thử lại” bằng hàm errorSwall().
                    errorSwall("Đã xảy ra lỗi Server. Vui lòng thử lại.");
                    return;
                }

                const data = await response.json();

            } catch (error) {
                // 18.1.11.0. Hiển thị thông báo “Đã xảy ra lỗi khi kết nối với Server” bằng hàm errorSwall().
                errorSwall("Đã xảy ra lỗi khi kết nối đến server.");

            }
        }
    };

    if (!isOpen) return null;

    return (

        <div
            className="modal fade show"
            tabIndex="-1"
            aria-labelledby="openModalLabel"
            aria-modal="true"
            role="dialog"
            style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
            {/* 18.1.1.21 Admin nhập thông tin vào các trường trong modal. */}
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="openModalLabel">
                            Thêm mới sản phẩm
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Tên sản phẩm:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Tên sản phẩm"
                                value={formData.name}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="img" className="form-label">
                                Link hình ảnh:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="img"
                                name="img"
                                placeholder="Hình ảnh"
                                value={formData.img}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">
                                Giá bán:
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                name="price"
                                placeholder="Giá bán"
                                value={formData.price}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="categoryID" className="form-label">
                                Chọn danh mục:
                            </label>
                            <ListCategory
                                value={formData.category}
                                onChange={handleCategoryChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="discountDefault" className="form-label">
                                Giảm giá % mặc định:
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="discountDefault"
                                name="discountDefault"
                                placeholder="Giảm giá mặc định"
                                value={formData.discountDefault}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">
                                Mô tả sản phẩm:
                            </label>
                            <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                rows="4"
                                placeholder="Mô tả sản phẩm"
                                value={formData.description}
                                onChange={handleFormChange}
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quantityStock" className="form-label">
                                Số lượng hàng đang có:
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="quanlityStock"
                                name="quanlityStock"
                                placeholder="Lượng hàng đang có"
                                value={formData.quanlityStock}
                                onChange={handleFormChange}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Hủy
                        </button>
                        {/* 18.1.1.25 Admin nhấn nút “Đồng ý” trong modal để gửi thông tin sản phẩm. */}
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={handleSubmit}
                        >
                            Đồng ý
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default NewProductModal;