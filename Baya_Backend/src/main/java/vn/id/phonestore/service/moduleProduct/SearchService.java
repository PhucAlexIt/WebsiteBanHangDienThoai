package vn.id.phonestore.service.moduleProduct;

import org.springframework.stereotype.Service;
import vn.id.phonestore.entity.Product;
import vn.id.phonestore.repository.moduleProduct.SearchRepository;

import java.util.List;

@Service
public class SearchService {
    private final SearchRepository searchRepository;

    public SearchService(SearchRepository searchRepository) {
        this.searchRepository = searchRepository;
    }

    public List<Product> searchProducts(String keyword) {
        return searchRepository.searchByName(keyword);
    }
}
