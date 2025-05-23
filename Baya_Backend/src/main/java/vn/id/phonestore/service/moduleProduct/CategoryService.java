package vn.id.phonestore.service.moduleProduct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.id.phonestore.entity.Category;
import vn.id.phonestore.repository.moduleProduct.CategoryRepository;
import vn.id.phonestore.repository.moduleProduct.ProductRepository;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
//    18.1.1.17 gọi findAll() của CategoryRepository để lấy tất cả danh mục từ CSDL.
    public List<Category> getAll (){
        return categoryRepository.findAll();
    }
}
