package vn.id.phonestore.controller.moduleProduct;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.id.phonestore.entity.Product;
import vn.id.phonestore.service.moduleProduct.SearchService;

import java.util.List;

@RestController

@RequestMapping("/search")
public class SearchController {
    private final SearchService searchService;

    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @GetMapping
    public ResponseEntity<List<Product>> searchProducts(@RequestParam("query") String keyword) {
        try {
            // 2.1.4.   SearchController nhận yêu cầu, gửi keyword sang SearchService để xử lý logic nghiệp vụ
            List<Product> list = searchService.searchProducts(keyword);

            if(list.isEmpty()) {
                return ResponseEntity.noContent().build(); // 2.2.2.2. SearchController trả về phản hồi rỗng cho SearchPage
            }

            return ResponseEntity.ok(list); // 2.1.9.	SearchController trả về danh sách sản phẩm cho SearchPage
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }
}