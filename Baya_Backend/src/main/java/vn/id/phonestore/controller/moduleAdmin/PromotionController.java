package vn.id.phonestore.controller.moduleAdmin;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.id.phonestore.dtos.PromotionDTO;
import vn.id.phonestore.entity.Promotion;
import vn.id.phonestore.service.moduleProduct.PromotionService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin")
public class PromotionController {
    private PromotionService promotionService;

    public PromotionController(PromotionService promotionService) {
        this.promotionService = promotionService;
    }

    // Lấy tất cả các chương trình khuyến mãi
    @GetMapping("/getAllPromotions")
    public ResponseEntity<List<Promotion>> getAllPromotion() {
        List<Promotion> list = promotionService.getAllPromotion();
        System.out.println(list);
        return ResponseEntity.ok(list);
    }

    // Thêm chương trình khuyến mãi
    @PostMapping("/addPromotion")
    public ResponseEntity<Promotion> createPromotion(@RequestBody PromotionDTO dto) {
        Promotion newPromotion = promotionService.createPromotion(dto);
        return ResponseEntity.ok(newPromotion);
    }

    @PutMapping("/updatePromotion/{id}")
    public ResponseEntity<Promotion> updatePromotion(
            @PathVariable("id") Integer id,
            @RequestBody PromotionDTO dto) {
        Promotion updatedPromotion = promotionService.updatePromotion(id, dto);
        if (updatedPromotion == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedPromotion);
    }

    @GetMapping("/getPromotionById/{id}")
    public ResponseEntity<Promotion> getPromotionById(@PathVariable("id") Integer id) {
        Promotion promotion = promotionService.getPromotionById(id);
        if (promotion != null) {
            return ResponseEntity.ok(promotion);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}