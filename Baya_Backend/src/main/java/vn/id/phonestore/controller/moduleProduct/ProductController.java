package vn.id.phonestore.controller.moduleProduct;

import vn.id.phonestore.service.moduleProduct.ProductService;

public class ProductController {

    private ProductService productService;
    public ProductController(ProductService productService) {
        this.productService = productService;
    }



}
