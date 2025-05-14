package vn.id.phonestore.controller.moduleProduct;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.id.phonestore.entity.Product;
import vn.id.phonestore.service.moduleProduct.ProductService;

@RestController
@RequestMapping("/product")
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/{productID}")
    public ResponseEntity getProductByID(@PathVariable("productID") Integer productID) {

        Product prod = productService.getProduct(productID);
        if (prod == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(prod);
        }

    }


}
