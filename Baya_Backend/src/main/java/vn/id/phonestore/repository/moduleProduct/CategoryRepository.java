package vn.id.phonestore.repository.moduleProduct;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.id.phonestore.entity.Category;
import vn.id.phonestore.entity.Product;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
//    18.1.1.16 CategoryRepository.findAll() thực hiện truy vấn SQL để lấy dữ liệu.
    List<Category> findAll();
}
