import { useEffect, useState } from "react";



const ListCategory = ({ value, onChange }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/category/')
            .then(response => response.json())
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