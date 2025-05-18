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
            List<Product> list = searchService.searchProducts(keyword);

            if(list.isEmpty()) {
                return ResponseEntity.noContent().build();
            }

            return ResponseEntity.ok(list);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }
}