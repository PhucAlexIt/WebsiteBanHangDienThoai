package vn.id.phonestore.controller.moduleProduct;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.id.phonestore.dtos.PromotionDTO;
import vn.id.phonestore.entity.Promotion;
import vn.id.phonestore.service.moduleProduct.PromotionService;

import java.util.List;

@RestController
@RequestMapping("/api/promotions")
@CrossOrigin(origins = "http://localhost:5173")
public class PromotionController {
    private PromotionService promotionService;

    public PromotionController(PromotionService promotionService) {
        this.promotionService = promotionService;
    }

    // Lấy tất cả các chương trình khuyến mãi
    @GetMapping
    public ResponseEntity<List<Promotion>> getAllPromotion() {
        List<Promotion> list = promotionService.getAllPromotion();
        System.out.println(list);
        return ResponseEntity.ok(list);
    }

    @PostMapping
    public ResponseEntity<Promotion> createPromotion(@RequestBody PromotionDTO dto) {
        Promotion newPromotion = promotionService.createPromotion(dto);
        return ResponseEntity.ok(newPromotion);
    }

}
