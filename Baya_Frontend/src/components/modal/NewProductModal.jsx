// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ListCategory from '../admin/listCategoryAdmin/ListCategory';

// const NewProductModal = ({ isOpen, onClose, onSubmit }) => {
//     const [formData, setFormData] = useState({
//         name: '',
//         img: '',
//         categoryID: '',
//         discountDefault: '',
//         quanlityStock: '',
//         description: '',

//     });

//     // Xử lý thay đổi input (họ tên, email, số điện thoại)
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     // Xử lý thay đổi checkbox (vai trò)
//     const handleCheckboxChange = (e) => {
//         const { value, checked } = e.target;
//         setFormData((prev) => {
//             const roles = checked
//                 ? [...prev.roles, value]
//                 : prev.roles.filter((role) => role !== value);
//             return { ...prev, roles };
//         });
//     };

//     // Xử lý khi nhấn "Đồng ý"
//     const handleSubmit = () => {
//         onSubmit(formData); // Gửi dữ liệu form cho component cha
//         setFormData({ fullName: '', email: '', phone: '', roles: [] }); // Reset form
//         onClose(); // Đóng modal
//     };

//     if (!isOpen) return null; // Không hiển thị modal nếu isOpen = false

//     return (
//         <div
//             className="modal fade show"
//             tabIndex="-1"
//             aria-labelledby="openModalLabel"
//             aria-modal="true"
//             role="dialog"
//             style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
//         >
//             <div className="modal-dialog modal-lg" >
//                 <div className="modal-content ">
//                     <div className="modal-header">
//                         <h5 className="modal-title" id="openModalLabel">
//                             Thêm mới sản phẩm
//                         </h5>
//                         <button
//                             type="button"
//                             className="btn-close"
//                             onClick={onClose}
//                             aria-label="Close"
//                         ></button>
//                     </div>
//                     <div className="modal-body">
//                         <div className="mb-3">
//                             <label htmlFor="fullName" className="form-label">
//                                 Tên sản phẩm:
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="fullName"
//                                 name="fullName"
//                                 placeholder="Tên sản phẩm"
//                                 value={formData.fullName}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">
//                                 Link hình ảnh:
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="email"
//                                 name="email"
//                                 placeholder="Hình ảnh"
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">
//                                 Giá bán:
//                             </label>
//                             <input
//                                 type="number"
//                                 className="form-control"
//                                 id="phone"
//                                 name="phone"
//                                 placeholder="Giá bán"
//                                 value={formData.phone}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">
//                                 Chọn danh mục:
//                             </label>
//                             <ListCategory />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">
//                                 Giảm giá % mặc định:
//                             </label>
//                             <input
//                                 type="number"
//                                 className="form-control"
//                                 id="phone"
//                                 name="phone"
//                                 placeholder="Giảm giá mặc định"
//                                 value={formData.phone}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">
//                                 Mô tả sản phẩm:
//                             </label>
//                             <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
//                         </div> <div className="mb-3">
//                             <label className="form-label">
//                                 Số lượng hàng đang có:
//                             </label>
//                             <input
//                                 type="number"
//                                 className="form-control"
//                                 id="phone"
//                                 name="phone"
//                                 placeholder="Lượng hàng đang có"
//                                 value={formData.phone}
//                                 onChange={handleInputChange}
//                             />
//                         </div>

//                     </div>
//                     <div className="modal-footer">
//                         <button type="button" className="btn btn-secondary" onClick={onClose}>
//                             Hủy
//                         </button>
//                         <button
//                             type="button"
//                             className="btn btn-danger"
//                             onClick={handleSubmit}
//                         >
//                             Đồng ý
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NewProductModal;







import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListCategory from '../admin/listCategoryAdmin/ListCategory';
import { data } from 'jquery';
import { errorSwall, successSwall } from "../../services/Swall"
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
        createAt: ''
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
        if (validate) {
            successSwall("Dữ liệu hợp lệ. Đang xử lý...");
        }
        else {
            console.log("khong hop le")
        }
        console.log(formData)
        return
        // onSubmit(submitData);
        // onClose();
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