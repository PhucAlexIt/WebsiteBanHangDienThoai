import React, { useState } from 'react';
import TableProduct from "../components/admin/tableProductAdmin/TableProduct";
import NewProductModal from "../components/modal/NewProductModal";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductAdmin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [refreshTrigger, setRefreshTrigger] = useState(0); // State to trigger table refresh

    // Mở modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // Đóng modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Xử lý dữ liệu form khi nhấn "Đồng ý"
    const handleModalSubmit = async (formData) => {
        try {
            console.log('Dữ liệu sản phẩm mới:', formData);
            // Giả sử bạn gửi dữ liệu qua API để thêm sản phẩm mới
            // Ví dụ: await fetch(instandURL + '/admin/product/', { method: 'POST', body: JSON.stringify(formData) });
            // Sau khi thêm thành công, cập nhật refreshTrigger để tải lại bảng
            setRefreshTrigger((prev) => prev + 1);
        } catch (error) {
            console.error('Lỗi khi thêm sản phẩm:', error);
        }
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
            <TableProduct refreshTrigger={refreshTrigger} />
            <NewProductModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleModalSubmit}
            />
        </>
    );
};

export default ProductAdmin;