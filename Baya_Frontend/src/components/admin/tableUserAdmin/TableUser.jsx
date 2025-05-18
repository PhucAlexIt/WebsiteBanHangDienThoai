import { useEffect, useState, useRef } from "react";
import instandURL from "../../../services/ApiConFig";
import { useNavigate } from "react-router-dom";

const ROLE_MAP = {
    1: "Admin",
    2: "Nhân viên",
    3: "Khách hàng",
    // Thêm các roleId khác nếu có
};

const TableUser = () => {
    const [users, setUsers] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteUserId, setDeleteUserId] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const tableRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            setError(null);

            try {
                // 17.1.6: Hệ thống nhận yêu cầu và gửi API RESTFUL tới lớp UserController.
                const res = await fetch(`${instandURL}/admin/users`);
                if (!res.ok) {
                    throw new Error(`Lỗi trả về: ${res.status} ${res.statusText}`);
                }
                const data = await res.json();
                if (data) {
                    setUsers(data);
                } else {
                    setError("Không nhận được dữ liệu từ API");
                }
            } catch (error) {
                setError(`Đã xảy ra lỗi: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleDeleteUserConfirm = async () => {
        if (!deleteUserId) return;
        try {
            const res = await fetch(`${instandURL}/admin/${deleteUserId}`, {
                method: "DELETE",
            });
            if (res.status === 200) {
                setUsers((prev) =>
                    prev.filter((user) => user.id !== parseInt(deleteUserId, 10))
                );
                window.Swal &&
                window.Swal.fire(
                    "Thành công",
                    "Đã xoá người dùng thành công.",
                    "success"
                );
            } else if (res.status === 404) {
                window.Swal &&
                window.Swal.fire("Thông báo", "Không tìm thấy người dùng để xoá.", "info");
            } else {
                let message = "Đã xảy ra lỗi khi xoá người dùng.";
                try {
                    const data = await res.text();
                    if (data) message += ` Chi tiết: ${data}`;
                } catch {}
                window.Swal && window.Swal.fire("Lỗi", message, "error");
            }
        } catch (error) {
            window.Swal &&
            window.Swal.fire("Lỗi", `Không thể xoá người dùng: ${error.message}`, "error");
        }
        setShowDeleteModal(false);
        setDeleteUserId("");
    };

    const handleOpenDeleteForm = () => {
        setDeleteUserId("");
        setShowDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    // Lấy tên vai trò dựa trên roleId
    const getRoleName = (roleId) => {
        if (!roleId) return "Thành viên";
        return ROLE_MAP[roleId] || "Thành viên";
    };

    const formatDate = (dateString) => {
        if (!dateString) return "Chưa cập nhật";
        try {
            const date = new Date(dateString);
            return date.toLocaleString();
        } catch (e) {
            return "Định dạng không hợp lệ";
        }
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-start mb-3">
                <h3>Quản Lý Người Dùng</h3>
                <button className="btn btn-primary" onClick={handleOpenDeleteForm}>
                    Xoá người dùng
                </button>
            </div>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <div className="row mx-1">
                <div className="col-12">
                    <div className="card flex-fill">
                        <div className="container py-3">
                            {loading ? (
                                <div className="text-center my-3">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Đang tải...</span>
                                    </div>
                                </div>
                            ) : (
                                <table
                                    ref={tableRef}
                                    id="userTable"
                                    className="table pt-2 mt-3 table-striped"
                                    style={{ width: "100%" }}
                                >
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
                                    <tbody>
                                    {users && users.length > 0 ? (
                                        users.map((user) => (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.fullName || "N/A"}</td>
                                                <td>{user.email || "N/A"}</td>
                                                <td>{user.phoneNumber || "N/A"}</td>
                                                <td>{getRoleName(user.roleId)}</td>
                                                <td>{formatDate(user.createAt)}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => {
                                                            setDeleteUserId(user.id);
                                                            setShowDeleteModal(true);
                                                        }}
                                                    >
                                                        Xoá
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="text-center">
                                                Không có dữ liệu người dùng
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            )}


                        </div>
                    </div>
                </div>
            </div>
            {showDeleteModal && (
                <div
                    className="modal show"
                    style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
                    tabIndex="-1"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Xoá người dùng theo ID</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseDeleteModal}
                                ></button>
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
                                >
                                    Huỷ
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={handleDeleteUserConfirm}
                                    disabled={!deleteUserId}
                                >
                                    Xoá
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TableUser;
