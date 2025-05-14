const menuCategories = document.querySelectorAll('.menu_category');
const subCategories = document.querySelectorAll('.sub_category_wrapper .category_list');
let activeCategory = null;

// Xử lý sự kiện click
menuCategories.forEach(menu => {
    menu.addEventListener('click', () => {
        // Lấy giá trị data-category từ menu_category
        const categoryId = menu.getAttribute('data-category');
        const relatedCategory = document.getElementById(categoryId);

        if (relatedCategory) {
            // Kiểm tra nếu danh mục này đang được mở
            if (relatedCategory === activeCategory) {
                // Nếu đang mở, ẩn nó đi
                relatedCategory.style.display = 'none';
                activeCategory = null; // Reset trạng thái
            } else {
                // Nếu danh mục khác đang mở, ẩn danh mục cũ
                if (activeCategory) {
                    activeCategory.style.display = 'none';
                }
                // Hiển thị danh mục mới
                relatedCategory.style.display = 'grid'; // Hiển thị dưới dạng lưới
                activeCategory = relatedCategory; // Cập nhật danh mục đang mở
            }
        }
    });
});

function openCategory() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';

}

function closeCategory() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}