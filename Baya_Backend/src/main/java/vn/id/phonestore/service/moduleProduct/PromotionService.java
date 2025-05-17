package vn.id.phonestore.service.moduleProduct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.id.phonestore.dtos.PromotionDTO;
import vn.id.phonestore.entity.Promotion;
import vn.id.phonestore.repository.moduleProduct.PromotionRepository;

import java.time.Instant;
import java.util.List;

@Service
public class PromotionService {
    @Autowired
    private PromotionRepository promotionRepository;

    public List<Promotion> getAllPromotion() {
        return promotionRepository.findAll();
    }

    public Promotion createPromotion(PromotionDTO dto) {
        Promotion promotion = new Promotion();
        promotion.setName(dto.getName());
        promotion.setDescription(dto.getDescription());
        promotion.setDiscountValue(dto.getDiscountValue());
        promotion.setStartDate(dto.getStartDate());
        promotion.setEndDate(dto.getEndDate());
        promotion.setStatus(dto.getStatus() != null ? dto.getStatus() : 1);
        promotion.setCreatedAt(Instant.now());
        promotion.setUpdatedAt(Instant.now());

        return promotionRepository.save(promotion);
    }

    public Promotion updatePromotion(int promotionId, PromotionDTO dto) {
        Promotion existingPromotion = promotionRepository.findById(promotionId).orElse(null);

        if (existingPromotion == null) {
            return null;
        }

        existingPromotion.setName(dto.getName());
        existingPromotion.setDescription(dto.getDescription());
        existingPromotion.setDiscountValue(dto.getDiscountValue());
        existingPromotion.setStartDate(dto.getStartDate());
        existingPromotion.setEndDate(dto.getEndDate());
        existingPromotion.setStatus(dto.getStatus() != null ? dto.getStatus() : existingPromotion.getStatus());
        existingPromotion.setUpdatedAt(Instant.now());

        return promotionRepository.save(existingPromotion);
    }

    public Promotion getPromotionById(Integer id) {
        return promotionRepository.findById(id).orElse(null);
    }
}