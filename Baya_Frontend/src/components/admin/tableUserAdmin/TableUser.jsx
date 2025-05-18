import { useEffect, useState, useRef } from "react";
import instandURL from "../../../services/ApiConFig";
import { useNavigate } from "react-router-dom";

const TableUser = () => {
    const [users, setUsers] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteUserId, setDeleteUserId] = useState("");
    const tableRef = useRef(null);
    const dataTable = useRef(null);
    const navigate = useNavigate();

    // ... (useEffect để load users, DataTables giữ nguyên)

    // Hàm gọi API xoá (bổ sung logic lấy ID từ form nhập)
    const handleDeleteUserConfirm = async () => {
        if (!deleteUserId) return;
        try {
            const response = await fetch(`${instandURL}/admin/${deleteUserId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setUsers((prev) => prev.filter((user) => user.id !== parseInt(deleteUserId, 10)));
                window.Swal.fire("Thành công", "Đã xoá người dùng thành công.", "success");
            } else if (response.status === 404) {
                window.Swal.fire("Thông báo", "Không tìm thấy người dùng để xoá.", "info");
            } else {
                window.Swal.fire("Lỗi", "Đã xảy ra lỗi khi xoá người dùng.", "error");
            }
        } catch (error) {
            window.Swal.fire("Lỗi", "Không thể xoá người dùng.", "error");
            console.error(error);
        }
        setShowDeleteModal(false);
        setDeleteUserId("");
    };

    // Nút "Xoá người dùng" mở form nhập ID
    const handleOpenDeleteForm = () => {
        setDeleteUserId("");
        setShowDeleteModal(true);
    };

    // Đóng modal
    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-start mb-3">
                <h3>Quản Lý Người Dùng</h3>
                <button className="btn btn-primary" onClick={handleOpenDeleteForm}>
                    Xoá người dùng
                </button>
            </div>
            {/* Table giữ giống như cũ */}
            <div className="row mx-1">
                <div className="col-12">
                    <div className="card flex-fill">
                        <div className="container py-3">
                            <table
                                ref={tableRef}
                                id="userTable"
                                className="table pt-2 mt-3 table-striped"
                                style={{ width: "100%" }}
                            >
                                {/* ...the rest giữ nguyên */}
                                <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Họ tên</th>
                                    <th>Email</th>
                                    <th>Số điện thoại</th>
                                    <th>Vai trò</th>
                                    <th>Ngày tạo</th>
                                    <th>Tính năng</th>
                                </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal nhập ID xoá */}
            {showDeleteModal && (
                <div className="modal show" style={{ display: "block" }} tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Xoá người dùng theo ID</h5>
                                <button type="button" className="btn-close" onClick={handleCloseDeleteModal}></button>
                            </div>
                            <div className="modal-body">
                                <label htmlFor="delete-user-id" className="form-label">
                                    Nhập ID người dùng cần xoá
                                </label>
                                <input
                                    id="delete-user-id"
                                    className="form-control"
                                    type="number"
                                    value={deleteUserId}
                                    onChange={(e) => setDeleteUserId(e.target.value)}
                                    placeholder="Nhập ID người dùng"
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="btn btn-secondary"
                                    onClick={handleCloseDeleteModal}
                                >Hủy</button>
                                <button
                                    className="btn btn-danger"
                                    onClick={handleDeleteUserConfirm}
                                    disabled={!deleteUserId}
                                >Xoá</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TableUser;



