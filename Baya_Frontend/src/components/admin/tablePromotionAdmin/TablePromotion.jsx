import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import instandURL from "../../../services/ApiConFig";
import "../../../assets/css/admin/table-promotion.css";

const TablePromotion = () => {
  const [promotions, setPromotions] = useState([]);
  const tableRef = useRef(null);
  const dataTable = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${instandURL}/admin/getAllPromotions`);
        const data = await response.json();
        setPromotions(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu khuyến mãi:", error);
      }
    };
    fetchData();
  }, []);

 useEffect(() => {
  let timeout;
  if (!tableRef.current || promotions.length === 0) return;

  timeout = setTimeout(() => {
    if (
      dataTable.current &&
      window.$.fn.DataTable.isDataTable(tableRef.current)
    ) {
      dataTable.current.clear().destroy();
      dataTable.current = null;
    }

    tableRef.current.querySelector("tbody").innerHTML = "";

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
          render: (date) => new Date(date).toLocaleDateString(),
        },
        {
          title: "Ngày kết thúc",
          data: "endDate",
          render: (date) => new Date(date).toLocaleDateString(),
        },
        {
          title: "Trạng thái",
          data: "status",
          render: (status) => (status === 1 ? "Hoạt động" : "Không hoạt động"),
        },
        {
          title: "Tính năng",
          data: "id",
          render: (id) => 
            `<button class="btn btn-warning btn-sm me-2 btn-edit" data-id="${id}">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn btn-danger btn-sm btn-delete" data-id="${id}">
              <i class="fa-solid fa-trash"></i>
            </button>`
          ,
          orderable: false,
          searchable: false,
        },
      ],
      language: {
        url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/vi.json",
      },
      responsive: true,
      autoWidth: false,
      pageLength: 10,
    });


    window.$(tableRef.current).off("click", ".btn-edit").on("click", ".btn-edit", function () {
      const id = window.$(this).data("id");
      editPromotion(id);
    });

    window.$(tableRef.current).off("click", ".btn-delete").on("click", ".btn-delete", function () {
      const id = window.$(this).data("id");
      deletePromotion(id);
    });
  }, 100); 

  return () => {
    clearTimeout(timeout);
    if (
      dataTable.current &&
      window.$.fn.DataTable.isDataTable(tableRef.current)
    ) {
      dataTable.current.destroy();
      dataTable.current = null;
    }
  };
}, [promotions]);


  const editPromotion = (id) => {
    navigate(`/admin/edit-promotion/${id}`);
  };

  const deletePromotion = async (id) => {
    const result = await window.Swal.fire({
      title: "Bạn có chắc chắn muốn xóa khuyến mãi này không?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Có",
      cancelButtonText: "Hủy",
    });

    if (!result.isConfirmed) return; 

    try {
      const response = await fetch(`${instandURL}/admin/deletePromotion/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Cập nhật lại danh sách sau khi xóa
        setPromotions((prev) => prev.filter((item) => item.id !== id));
      } else if (response.status === 404) {
        console.log("Không tìm thấy khuyến mãi để xóa.");
      } else {
        console.log("Đã xảy ra lỗi khi xóa khuyến mãi.");
      }
    } catch (error) {
      console.error("Lỗi khi xóa khuyến mãi:", error);
    }
  };


  // 22.1.2. Khởi tạo hàm handleAddPromotion() và gọi hàm navigate("/admin/add-promotion") 
  // chuyển đến trang Thêm khuyến mãi
  const handleAddPromotion = () => {
    navigate("/admin/add-promotion");
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-start">
          <h3>Quản Lý Khuyến Mãi</h3>

          {/* 22.1.1. Admin click vào nút "Tạo mới khuyến mãi" */}
          <button 
          // 22.1.3. Cài đặt sự kiện onClick={handleAddPromotion()} cho nút “Tạo mới khuyến mãi”.
          onClick={handleAddPromotion} 
          className="btn mt-3" id="btn-add">
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