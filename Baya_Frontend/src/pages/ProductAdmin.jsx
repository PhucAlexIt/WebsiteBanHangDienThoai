import React, { useState } from 'react';
import TableProduct from "../components/admin/tableProductAdmin/TableProduct";
import NewProductModal from "../components/modal/NewProductModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import { successSwall, errorSwall } from '../services/Swall'
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

    const handleModalSubmit = async (formData) => {
        try {
            console.log('Dữ liệu sản phẩm mới:', formData);
            setRefreshTrigger((prev) => {
                const newTrigger = prev + 1;
                console.log('Refresh trigger updated:', newTrigger);
                return newTrigger;
            });
        } catch (error) {
            console.error('Lỗi khi thêm sản phẩm:', error);
        }
        setIsModalOpen(false);
    };



    function remove_btn(id) {
        var feature = {
            featureID: $("#featureID_remove").val(),
        }
        $.ajax({
            url: "/removeResource",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(feature),
            dataType: "json",
            success: function (response) {
                if (response.success) {
                    $("#openModal").modal("hide");
                    successSwall("Đã xóa thành công");


                } else {
                    errorSwall("Đã xảy ra lỗi");
                }
            },

        });



    }


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
                refreshTrigger={refreshTrigger}

            />
        </>
    );
};

export default ProductAdmin;