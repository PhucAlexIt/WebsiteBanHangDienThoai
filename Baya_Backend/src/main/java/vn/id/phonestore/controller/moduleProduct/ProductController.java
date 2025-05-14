package vn.id.phonestore.controller.moduleProduct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.id.phonestore.config.RestResponse;
import vn.id.phonestore.dtos.ProductDTO;
import vn.id.phonestore.entity.Product;
import vn.id.phonestore.service.moduleProduct.ProductService;

import java.util.List;

@RestController
@RequestMapping("/")
public class ProductController {
     private ProductService productService;
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/getTop10Sell")
    public ResponseEntity get10ProductTopSell() {
        List<Product> list = productService.findTop10QuanlitySell();
        System.out.println(list);


        return ResponseEntity.ok(list);
    }
}
