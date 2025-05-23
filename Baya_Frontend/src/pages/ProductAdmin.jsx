import React, { useState } from 'react';
import TableProduct from "../components/admin/tableProductAdmin/TableProduct";
import NewProductModal from "../components/modal/NewProductModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import { successSwall, errorSwall } from '../services/Swall'
import instandURL from '../services/ApiConFig';
const ProductAdmin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    // 18.1.1.12 Hàm handleOpenModal() đặt isModalOpen thành true, hiển thị component NewProductModal dưới dạng popup.
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };


    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleModalSubmit = async () => {
        // 18.1.1.35 handleModalSubmit() trong ProductAdmin để tăng giá trị refreshTrigger.
        setRefreshTrigger((prev) => {
            const newTrigger = prev + 1;

            return newTrigger;
        });
        //   18.1.1.36 đóng modal bằng cách gọi handlerCloseModal(false).
        setIsModalOpen(false);
    };


    return (
        <>
            {/* 18.1.1.11 Admin nhấn nút “Thêm mới”. */}

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
                refreshTrigger={refreshTrigger}

            />
        </>
    );
};

export default ProductAdmin;