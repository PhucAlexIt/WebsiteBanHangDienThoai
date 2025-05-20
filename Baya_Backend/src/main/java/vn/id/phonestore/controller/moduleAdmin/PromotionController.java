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
    // 22.1.7. PromotionController gọi PromotionService.createPromotion(PromotionDTO dto)
    @PostMapping("/addPromotion")
    public ResponseEntity<?> createPromotion(@RequestBody PromotionDTO dto) {
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

    @DeleteMapping("/deletePromotion/{id}")
    public ResponseEntity<String> deletePromotion(@PathVariable Integer id) {
        boolean deleted = promotionService.deletePromotionById(id);
        if (deleted) {
            return ResponseEntity.ok("Xóa khuyến mãi thành công");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Không tìm thấy khuyến mãi");
        }
    }
}