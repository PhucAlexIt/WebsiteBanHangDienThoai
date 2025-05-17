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
    public ResponseEntity searchProducts(@RequestParam("query") String keyword) {
        System.out.println(keyword);
        if(keyword == null || keyword.isEmpty()) {
            System.out.println("trương hop null");
            return ResponseEntity.notFound().build();
        }
        List<Product> list = searchService.searchProducts(keyword);
        System.out.println("list" + list);
        if(list.isEmpty()) {
            System.out.println("trương hop bị empt");
            return ResponseEntity.noContent().build();
        }
        else{
            System.out.println("trương hop dung");
            return ResponseEntity.ok(list);
        }

    }
}