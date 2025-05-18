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
        // 2.1.5.   SearchService gọi SearchRepository để thực hiện truy vấn
        // 2.1.8.	SearchService chuyển danh sách sản phẩm cho SearchController
        // 2.2.2.1. SearchService gửi danh sách rỗng cho SearchController
        return searchRepository.searchByName(keyword);
    }
}
