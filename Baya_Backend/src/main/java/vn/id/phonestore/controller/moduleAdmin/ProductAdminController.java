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
//    @Autowired
    private ModelMapper modelMapper;
    private ProductService productService;


    public ProductAdminController(ProductService productService) {
        this.productService = productService;
    }
    @GetMapping("/")
    public ResponseEntity getAllProduct() {
//        18.1.1.4 ProductAdminController gọi phương thức listAllProduct() trong ProductService.
//        18.1.1.7 Trả về danh sách sản phẩm đang có từ CSDL.
        List<Product> list = productService.listAllProduct();
//        18.1.1.8 ProductAdminController trả về danh sách sản phẩm dưới dạng JSON với mã trạng thái HTTP 200 OK.
        return ResponseEntity.ok(list);
    }

    @DeleteMapping("/delete/{productID}")
    public ResponseEntity deleteProduct(@PathVariable Long id){
        try{
            if(productService.existProductById(id)){
                productService.deleteByID(id);
                return ResponseEntity.ok().build();
            }
            return ResponseEntity.notFound().build();
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }

    @PostMapping("/")
    public ResponseEntity addProduct(@RequestBody Product product) {

        try{
            //    18.1.1.28 gọi phương thức saveProduct() trong ProductService, truyền vào Product đã nhận.
            //      18.1.1.31 Trả về Product vừa được thêm từ CSDL.
            Product prod=  productService.saveProduct(product);
//            18.1.1.32  trả về đối tượng sản phẩm đã lưu dưới dạng JSON với mã trạng thái HTTP 201 Created.

                return ResponseEntity.status(HttpStatus.CREATED).body(prod);

        }catch (Exception e){
//            18.1.10.0 Trả về với mã trạng thái HTTP là 500.
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }


}
