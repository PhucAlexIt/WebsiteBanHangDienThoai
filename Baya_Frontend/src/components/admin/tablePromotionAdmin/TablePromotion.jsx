import { useEffect, useState, useRef } from "react";
import instandURL from "../../../services/ApiConFig";
import "../../../assets/css/admin/table-promotion.css";

const TablePromotion = () => {
  const [promotions, setPromotions] = useState([]);
  const tableRef = useRef(null);
  let dataTable = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${instandURL}/admin/getAllPomotions`);
        const data = await response.json();
        setPromotions(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu khuyến mãi:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!tableRef.current) return;

    if (dataTable.current && window.$.fn.DataTable.isDataTable(tableRef.current)) {
      dataTable.current.destroy();
      dataTable.current = null;
    }

    // Nếu kết nối dữ liệu thành công
    if (promotions.length > 0) {
      dataTable.current = window.$(tableRef.current).DataTable({
        data: promotions,
        columns: [
          { title: "ID", data: "id" },
          { title: "Tên", data: "name" },
          { title: "Mô tả", data: "description" },
          { title: "Giảm giá (%)", data: "discountValue" },
          {
            title: "Ngày bắt đầu",
            data: "startDate",
            render: date => new Date(date).toLocaleDateString()
          },
          {
            title: "Ngày kết thúc",
            data: "endDate",
            render: date => new Date(date).toLocaleDateString()
          },
          {
            title: "Trạng thái",
            data: "status",
            render: status => status === 1 ? "Hoạt động" : "Không hoạt động"
          },
          {
            title: "Tính năng",
            data: "id",
            render: (id) => `
              <button class="btn btn-warning btn-sm me-2" onclick="editPromotion(${id})">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn btn-danger btn-sm" onclick="deletePromotion(${id})">
                <i class="fa-solid fa-trash"></i>
              </button>
            `,
            orderable: false,
            searchable: false,
          },
        ],
        language: {
          url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/vi.json"
        },
        responsive: true,
        autoWidth: false,
        pageLength: 10,
      });
    }

    // Cleanup
    return () => {
      if (dataTable.current && window.$.fn.DataTable.isDataTable(tableRef.current)) {
        dataTable.current.destroy();
        dataTable.current = null;
      }
    };
  }, [promotions]);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-start">
          <h3>Quản Lý Khuyến Mãi</h3>
          <button className="btn mt-3" id="btn-add">
            Tạo mới khuyến mãi
          </button>
        </div>
      </div>

      <div className="row mx-1">
        <div className="col-12 col-lg-12 col-xxl-12 d-flex">
          <div className="card flex-fill">
            <div className="container py-3">
              <table
                ref={tableRef}
                id="promotionTable"
                className="table pt-2 mt-3 table-striped"
                style={{ width: "100%" }}
              >
                <thead className="table-dark">
                  <tr>
                    <th style={{ width: "5%" }}>ID</th>
                    <th className="d-none d-md-table-cell">Tên</th>
                    <th className="d-none d-md-table-cell">Mô tả</th>
                    <th className="d-none d-md-table-cell">Giảm giá (%)</th>
                    <th className="d-none d-md-table-cell">Ngày bắt đầu</th>
                    <th className="d-none d-md-table-cell">Ngày kết thúc</th>
                    <th className="d-none d-md-table-cell">Trạng thái</th>
                    <th className="d-none d-md-table-cell">Tính năng</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TablePromotion;
