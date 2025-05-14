package vn.id.phonestore.controller.moduleAdmin;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
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
    public ResponseEntity getAllProduct(){

        return ResponseEntity.ok(productService.listAllProduct());
    }
    @PostMapping("/create")
    public ResponseEntity<Product> addProduct(@RequestBody ProductDTO productDTO){
//        Product pr = new Product();
//        pr.setName("tilte");
//        pr.setPrice(22.0);
//        pr.setDiscountDefault(10);
//        pr.setProductID("22");
//        pr.setQuanlitySell(100);
//        pr.setQuanlityStock(300);
//        ProductDTO dto = modelMapper.map(pr, ProductDTO.class);
//        System.out.println(dto.toString());

//        Product product = modelMapper.map(productDTO, Product.class);
      Product prod = productService.addProduct(modelMapper.map(productDTO, Product.class));
        if(prod != null){
            return ResponseEntity.ok(prod);
        }
        else{
            return ResponseEntity.badRequest().body(null);
        }


//        System.out.println(product);
//        Product newProduct = productService.addProduct(product);
//        return ResponseEntity.ok(product);


    }
}
