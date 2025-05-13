package vn.id.phonestore.repository.moduleProduct;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.id.phonestore.dtos.ProductDTO;
import vn.id.phonestore.entity.Product;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<ProductDTO> findTop10ByOrderByQuanlitySellDesc();
}
