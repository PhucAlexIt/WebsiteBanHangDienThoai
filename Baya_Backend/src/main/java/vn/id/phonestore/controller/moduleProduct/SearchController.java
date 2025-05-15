package vn.id.phonestore.controller.moduleProduct;

import org.springframework.web.bind.annotation.*;
import vn.id.phonestore.entity.Product;
import vn.id.phonestore.service.moduleProduct.SearchService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/search")
public class SearchController {
    private final SearchService searchService;

    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @GetMapping
    public List<Product> searchProducts(@RequestParam String keyword) {
        return searchService.searchProducts(keyword);
    }
}
