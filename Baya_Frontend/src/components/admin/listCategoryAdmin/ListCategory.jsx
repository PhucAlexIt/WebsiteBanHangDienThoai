import { useEffect, useState } from "react";
import instandURL from "../../../services/ApiConFig";



const ListCategory = ({ value, onChange }) => {
    const [categories, setCategories] = useState([]);
    // 18.1.1.13 gửi yêu cầu GET tới endpoint “/category/” để lấy danh sách danh mục sản phẩm.
    useEffect(() => {
        fetch(instandURL + '/category/')

            .then(response => response.json())
            // 18.1.1.19 Lưu danh sách Category vào state categories bằng hàm setCategories().
            .then(data => setCategories(data))
            .catch(error => alert('Xảy ra lỗi Load Category', error));
    }, []);
    const handleChange = (e) => {
        const selectedId = e.target.value;
        const selectedCategory = categories.find(cat => cat.id === (selectedId ? parseInt(selectedId) : "")) || { id: "", name: "" };
        onChange({
            target: {
                value: { id: selectedId, name: selectedCategory.name },
            },
        });
    };

    return (
        <>
            <select
                className="form-control form-control-sm"
                value={value?.id || ""}
                onChange={handleChange}
            >
                <option value="">Vui lòng chọn</option>
                {/* 18.1.1.20 render các <Option> trong dropdown <select> bằng hàm category.map(). Mỗi <option> sẽ hiển thị key = category.name và value = category.id */}
                {categories.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </>
    );
};

export default ListCategory;