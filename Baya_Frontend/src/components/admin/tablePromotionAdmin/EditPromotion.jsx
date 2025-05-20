import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instandURL from "../../../services/ApiConFig";
import "../../../assets/css/admin/form-promotion.css";

const EditPromotion = ({ promotionId }) => {
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

  useEffect(() => {
    const fetchPromotion = async () => {
      try {
        const res = await fetch(`${instandURL}/admin/getPromotionById/${promotionId}`);
        if (!res.ok) throw new Error("Không tìm thấy khuyến mãi");
        const data = await res.json();
        setPromotion({
          name: data.name || "",
          description: data.description || "",
          discountValue: data.discountValue || "",
          startDate: data.startDate?.split("T")[0] || "",
          endDate: data.endDate?.split("T")[0] || "",
          status: data.status,
        });
      } catch (err) {
        alert("Lỗi tải dữ liệu");
        navigate("/admin/promotion");
      }
    };

    if (promotionId) fetchPromotion();
  }, [promotionId, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPromotion((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const start = new Date(promotion.startDate);
    const end = new Date(promotion.endDate);

    if (start >= end) {
      setError("Ngày bắt đầu phải trước ngày kết thúc!");
      return;
    }
    setError("");

    try {
      const formattedData = {
        ...promotion,
        startDate: start.toISOString(),
        endDate: end.toISOString(),
        discountValue: parseFloat(promotion.discountValue),
      };

      const response = await fetch(`${instandURL}/admin/updatePromotion/${promotionId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        setError("Lỗi khi cập nhật, vui lòng thử lại.");
        return;
      }

      alert("Cập nhật thành công!");
      navigate("/admin/promotion");
    } catch (error) {
      setError("Cập nhật thất bại, vui lòng thử lại");
    }
  };

  const handleCancel = () => {
    navigate("/admin/promotion");
  };

  return (
    <div className="promotion-form-container">
      <h2>Chỉnh sửa Khuyến Mãi</h2>
      <form className="promotion-form" onSubmit={handleSubmit}>
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

        <div>
          <button type="submit" className="submit-btn">Lưu thay đổi</button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>Hủy</button>
        </div>
      </form>
    </div>
  );
};

export default EditPromotion;