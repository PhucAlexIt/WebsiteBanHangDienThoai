package vn.id.phonestore.repository.moduleProduct;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.id.phonestore.dtos.ProductDTO;
import vn.id.phonestore.entity.Product;

import java.util.List;
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findTop10ByOrderByQuanlitySellDesc();

    List<Product> findTop10ByOrderByDiscountDefaultDesc();

    Product getProductByProductID(Integer productID);
}
