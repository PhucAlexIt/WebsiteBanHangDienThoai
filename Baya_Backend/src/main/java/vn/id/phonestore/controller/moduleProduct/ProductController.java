package vn.id.phonestore.controller.moduleProduct;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.id.phonestore.dtos.ProductDTO;

import java.util.List;

@RestController
@RequestMapping("/")
public class ProductController {

    @GetMapping("/get10TopSell")
    public List<ProductDTO> get10ProductTopSell(){

    }
}
