package vn.id.phonestore.controller.moduleProduct;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.id.phonestore.entity.Category;
import vn.id.phonestore.service.moduleProduct.CategoryService;
import vn.id.phonestore.service.moduleProduct.ProductService;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {

    private CategoryService categoryService;
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/")
    public ResponseEntity findAll() {
//        18.1.1.15 CategoryController gọi phương thức getAll() trong CategoryService để lấy danh sách danh mục.
//        18.1.1.18 Trả về tất cả các danh mục đang có ở CSDL.
        List<Category> list = categoryService.getAll();
//        18.1.1.19 trả về danh sách danh mục dưới dạng JSON với mã trạng thái HTTP 200 OK.
        return ResponseEntity.ok(list);

    }
}
