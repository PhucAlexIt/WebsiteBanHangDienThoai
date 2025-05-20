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
//    18.1.1.5 ProductService gọi findAll() trong ProductRepository.
    public List<Product> listAllProduct() {

        return productRepository.findAll();
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

    public Product saveProduct(Product product){
//        18.1.1.29  gọi ProductRepository.save() để lưu bản ghi sản phẩm mới vào CSDL.
        return productRepository.save(product);
    }


}