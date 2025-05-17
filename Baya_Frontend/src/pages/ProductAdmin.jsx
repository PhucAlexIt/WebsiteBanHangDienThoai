import TableProduct from "../components/admin/tableProductAdmin/TableProduct"



// const ProductAdmin = () => {
//     return (
//         <>
//             <div href="#" className="btn btn-success btn-icon-split" style={{ marginLeft: "20px", marginBottom: "20px" }}>
//                 <span className="icon text-white-50">
//                     <i class="fa-solid fa-plus"></i>
//                 </span>
//                 <span className="text">Thêm mới</span>
//             </div>
//             <TableProduct />

//         </>
//     )

// }
// export default ProductAdmin

import React, { useState } from 'react';
// import TableProduct from '../components/admin/tableProductAdmin/TableProduct';
import NewProductModal from "../components/modal/NewProductModal"
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductAdmin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Mở modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // Đóng modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Xử lý dữ liệu form khi nhấn "Đồng ý"
    const handleModalSubmit = (formData) => {
        console.log('Dữ liệu người quản trị mới:', formData);
        // Thêm logic, ví dụ: gửi dữ liệu qua API
        setIsModalOpen(false); // Đóng modal
    };

    return (
        <>
            <button
                className="btn btn-success btn-icon-split"
                style={{ marginLeft: '20px', marginBottom: '20px' }}
                onClick={handleOpenModal}
            >
                <span className="icon text-white-50">
                    <i className="fa-solid fa-plus"></i>
                </span>
                <span className="text">Thêm mới</span>
            </button>
            <TableProduct />
            <NewProductModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleModalSubmit}
            />
        </>
    );
};

export default ProductAdmin;