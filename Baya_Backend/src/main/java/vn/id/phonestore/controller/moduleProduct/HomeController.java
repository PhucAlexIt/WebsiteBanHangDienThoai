package vn.id.phonestore.controller.moduleProduct;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.id.phonestore.entity.Product;
import vn.id.phonestore.service.moduleProduct.ProductService;

import java.util.List;

@RestController
@RequestMapping("/")
public class HomeController {
     private ProductService productService;
    public HomeController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/getTop10Sell")
    public ResponseEntity get10ProductTopSell() {
        List<Product> list = productService.findTop10QuanlitySell();
        System.out.println(list);


        return ResponseEntity.ok(list);
    }
    @GetMapping("/getTop10Discounts")
    public ResponseEntity getTop10Discount(){
        List<Product> list = productService.findTop10DiscountSell();
        return ResponseEntity.ok(list);

    }



}
