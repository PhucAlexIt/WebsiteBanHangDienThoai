import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instandURL from "../../../services/ApiConFig";
import "../../../assets/css/admin/form-promotion.css";

// 22.1.5. Hiển thị trang thêm khuyến mãi
const AddPromotion = () => {
  const [promotion, setPromotion] = useState({
    name: "",
    description: "",
    discountValue: "",
    startDate: "",
    endDate: "",
    status: 1,
  });
  
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 22.1.7. Khởi tạo hàm handleChange() để cập nhật dữ liệu nhập từ người dùng 
  const handleChange = (e) => {
    const { name, value } = e.target;
      setPromotion((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

  // 22.1.11. Hàm handleSubmit() được gọi
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 22.1.12. Khởi tạo biến start và end
    const start = new Date(promotion.startDate);
    const end = new Date(promotion.endDate);

    // 22.1.13. Kiểm tra điều kiện của ngày bắt đầu (start) và ngày kết thúc (end)
    if (start >= end) {
      setError("Ngày bắt đầu phải trước ngày kết thúc!");
      return;
    }
    
    setError("");

      // 22.1.14. Hệ thống chuẩn hóa dữ liệu đầu vào
      const formattedData = {
        ...promotion,
        startDate: start.toISOString(),
        endDate: end.toISOString(),
        discountValue: parseFloat(promotion.discountValue),
      };

      // 22.1.15. Hệ thống gửi POST request đến API ${instandURL}/admin/addPromotion.
      const response = await fetch(`${instandURL}/admin/addPromotion`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });


      if (!response.ok) {
        const errorMessage = await response.text();
        setError(errorMessage || "Lỗi khi lưu dữ liệu, vui lòng thử lại.");
        return;
      }

      // 22.1.18. Hệ thống hiển thị thông báo "Thêm mới thành công"
      alert("Thêm mới thành công!");

      // 22.1.19. Gọi navigate để quay lại trang quản lý khuyến mãi
      navigate("/admin/promotion");
    
  };

  // 22.1.6. Admin nhập đầy đủ thông tin trong form
  return (
    <div className="promotion-form-container">
      <h2>Thêm Khuyến Mãi</h2>
      {/* 22.1.9. Gán sự kiện onSubmit={handleSubmit} */}
      <form className="promotion-form" onSubmit={handleSubmit}>
        {/*22.1.8. Gán sự kiện change cho các input (handleChange) */}
        <div className="form-grid">
          <div className="form-col">
            <label htmlFor="name">Tên:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={promotion.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-col">
            <label htmlFor="discountValue">Giảm giá (%):</label>
            <input
              type="number"
              id="discountValue"
              name="discountValue"
              value={promotion.discountValue}
              onChange={handleChange}
              min="0"
              max="100"
              step="0.01"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="description">Mô tả:</label>
          <textarea
            id="description"
            name="description"
            value={promotion.description}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>

        <div className="form-grid grid-3">
          <div className="form-col">
            <label htmlFor="startDate">Ngày bắt đầu:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={promotion.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-col">
            <label htmlFor="endDate">Ngày kết thúc:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={promotion.endDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-col">
            <label htmlFor="status">Trạng thái:</label>
            <select
              id="status"
              name="status"
              value={promotion.status}
              onChange={handleChange}
            >
              <option value={1}>Hoạt động</option>
              <option value={0}>Không hoạt động</option>
            </select>
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}

        {/* 22.1.10. Admin click nút "Thêm" */}
        <div>
          <button type="submit" className="submit-btn">Thêm</button>
        </div>
      </form>
    </div>
  );
};

export default AddPromotion;