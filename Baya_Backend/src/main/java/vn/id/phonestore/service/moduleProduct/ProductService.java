package vn.id.phonestore.service.moduleProduct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.id.phonestore.dtos.ProductDTO;
import vn.id.phonestore.entity.Product;
import vn.id.phonestore.repository.moduleProduct.ProductRepository;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> findTop10QuanlitySell() {
        return productRepository.findTop10ByOrderByQuanlitySellDesc();
    }

    public List<Product> findTop10DiscountSell() {
        return productRepository.findTop10ByOrderByDiscountDefaultDesc();
    }
    public List<Product> listAllProduct() {
        return productRepository.findAll();
    }
    public Product addProduct(Product pro){
        return productRepository.save(pro);
    }
    public Product getProduct(Integer productID){
        return productRepository.getProductByProductID(productID);
    }
    public boolean existProductById(Long productID){
        return productRepository.existsById(productID);
    }
    public void deleteByID (Long productID){
        productRepository.deleteById(productID);

    }


}