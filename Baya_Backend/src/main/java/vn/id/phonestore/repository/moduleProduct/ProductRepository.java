package vn.id.phonestore.repository.moduleProduct;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.id.phonestore.dtos.ProductDTO;
import vn.id.phonestore.entity.Product;


import java.util.List;
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
//    18.1.1.6  ProductRepository gọi findAll() thực hiện truy vấn SQL để lấy dữ liệu.
    List<Product> findAll();

//18.1.1.30 gọi hàm save() thực hiện truy vấn thêm Product mới vào CSDL.
    Product save(Product product);
    List<Product> findTop10ByOrderByQuanlitySellDesc();

    List<Product> findTop10ByOrderByDiscountDefaultDesc();

    Product getProductByProductID(Integer productID);
}
