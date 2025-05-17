package vn.id.phonestore.repository.moduleProduct;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.id.phonestore.entity.Category;
import vn.id.phonestore.entity.Product;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
