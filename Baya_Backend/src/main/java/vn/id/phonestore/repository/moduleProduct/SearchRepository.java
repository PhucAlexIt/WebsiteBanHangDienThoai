package vn.id.phonestore.repository.moduleProduct;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vn.id.phonestore.entity.Product;

import java.util.List;

@Repository
public interface SearchRepository extends JpaRepository<Product, Integer> {

    // 2.1.6.	SearchRepository thực thi truy vấn vào cơ sở dữ liệu để tìm sản phẩm phù hợp
    // 2.1.7.	SearchRepository trả về danh sách sản phẩm cho SearchService
    // 2.2.2.0. SearchRepository trả về danh sách rỗng cho SearchService, vì không tìm thấy kết quả phù hợp trong cơ sở dữ liệu
    @Query("SELECT p FROM Product p WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Product> searchByName(String keyword);
}
