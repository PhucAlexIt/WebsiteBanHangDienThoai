


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListCategory from '../admin/listCategoryAdmin/ListCategory';
import instandURL from "../../services/ApiConFig"
import { errorSwall, successSwall } from "../../services/Swall"
import TableProduct from "../admin/tableProductAdmin/TableProduct"

const NewProductModal = ({ isOpen, onClose, onSubmit }) => {
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
        quantityStock: '',
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCategoryChange = (e) => {
        const { id, name } = e.target.value;
        setFormData((prev) => ({
            ...prev,
            category: { id, name },
        }));
    };
    const validateImageUrl = (url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = url;

            img.onload = () => resolve(true);     // Ảnh tồn tại
            img.onerror = () => resolve(false);   // URL không hợp lệ hoặc không phải ảnh
        });
    };




    const validateFormData = async () => {
        const { name, img, price, category, discountDefault, description, quantityStock } = formData;

        if (!name.trim()) {
            errorSwall("Tên sản phẩm không được để trống.");
            return false;
        }
        if (!img.trim()) {
            errorSwall("Ảnh sản phẩm không được để trống.");
            return false;
        }
        if (!(await validateImageUrl(img))) {
            errorSwall("URL không hợp lệ hoặc không phải là ảnh.");
            return false;
        }


        if (!price || isNaN(price) || Number(price) <= 0) {
            errorSwall("Giá sản phẩm không hợp lệ");
            return false;
        }

        if (!category.id || !category.name) {
            errorSwall("Danh mục sản phẩm không được để trống.");
            return false;
        }

        if (discountDefault === '' || isNaN(discountDefault) || Number(discountDefault) < 0 || Number(discountDefault) > 100) {
            errorSwall("Trường giảm giá chưa hợp lệ");
            return false;
        }

        if (!description.trim()) {
            errorSwall("Mô tả sản phẩm không được để trống.");
            return false;
        }

        if (!quantityStock || isNaN(quantityStock) || Number(quantityStock) < 0) {
            errorSwall("Số lượng tồn kho chưa hợp lệ.");
            return false;
        }


        return true;
    };

    const handleSubmit = async () => {
        const validate = await validateFormData();
        console.log("data gui: ", formData); // Use the formData state
        console.log(instandURL + '/admin/product/');
        if (validate) {
            fetch(instandURL + '/admin/product/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            })
                .then(response => {


                    if (response.status === 201) {

                        successSwall("Đã thêm thành công")
                        onClose()
                        return

                    }
                    if (response.status === 500) {
                        errorSwall("Đã xảy ra lỗi bên Server.")
                        return
                    }

                    return response.json();
                })
                .then(data => {



                })
                .catch(error => {
                    errorSwall("Đã xảy ra lỗi.");
                });


        }

        return
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
                                id="quantityStock"
                                name="quantityStock"
                                placeholder="Lượng hàng đang có"
                                value={formData.quantityStock}
                                onChange={handleFormChange}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Hủy
                        </button>
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
        </div>
    );
};

export default NewProductModal;