package vn.id.phonestore.controller.moduleAdmin;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.id.phonestore.dtos.ProductDTO;
import vn.id.phonestore.entity.Product;
import vn.id.phonestore.service.moduleProduct.ProductService;

import java.util.List;

@RestController
@RequestMapping("/admin/product")
public class ProductAdminController {
    @Autowired
    private ModelMapper modelMapper;
    private ProductService productService;

    public ProductAdminController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/")
    public ResponseEntity getAllProduct() {
        return ResponseEntity.ok(productService.listAllProduct());
    }
//
//    @PostMapping("/create")
//    public ResponseEntity<Product> addProduct(@RequestBody ProductDTO productDTO) {
//
//        Product prod = productService.addProduct(modelMapper.map(productDTO, Product.class));
//        if (prod != null) {
//            return ResponseEntity.ok(prod);
//        } else {
//            return ResponseEntity.badRequest().body(null);
//        }
//
//
//    }
    @DeleteMapping("/delete/{productID}")
    public ResponseEntity deleteProduct(@PathVariable Long id){
        if(productService.existProductById(id)){
            productService.deleteByID(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
    @PostMapping("/")
    public ResponseEntity addProduct(@RequestBody Product product) {

        try{
            System.out.println(product);
            Product prod=  productService.saveProduct(product);
                return ResponseEntity.status(HttpStatus.CREATED).body(prod);

        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }

}
