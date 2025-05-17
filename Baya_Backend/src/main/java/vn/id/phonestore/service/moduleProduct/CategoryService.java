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
    public List<Category> getAll (){
        return categoryRepository.findAll();
    }
}
