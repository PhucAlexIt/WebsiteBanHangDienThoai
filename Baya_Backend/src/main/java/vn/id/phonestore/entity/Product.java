package vn.id.phonestore.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;

import java.time.Instant;
import java.time.LocalDateTime;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @Column(name = "productID", nullable = false, length = 100)
    private String productID;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private Double price;

    @Lob
    @Column(name = "description")
    private String description;

    @Column(name = "img")
    private String img;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "categoryID")
    private Category categoryID;

    @Column(name = "quanlityStock",length = 11,nullable = true)
    private Integer quanlityStock;

    @Column(name = "quanlitySell",length = 11,nullable = true)
    private Integer quanlitySell;

    @Column(name = "createAt")
//    @PrePersist
//    public void prePersist() {
//        if (this.createAt == null) {
//            this.createAt = Instant.now();
//        }
//    }
    private Instant  createAt;

    public String getProductID() {
        return productID;
    }

    public void setProductID(String productID) {
        this.productID = productID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
    public Category getCategoryID() {
        return categoryID;
    }

    public void setCategoryID(Category categoryID) {
        this.categoryID = categoryID;
    }

    public Integer getQuanlityStock() {
        return quanlityStock;
    }

    public void setQuanlityStock(Integer quanlityStock) {
        this.quanlityStock = quanlityStock;
    }

    public Integer getQuanlitySell() {
        return quanlitySell;
    }

    public void setQuanlitySell(Integer quanlitySell) {
        this.quanlitySell = quanlitySell;
    }

    public Instant   getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Instant   createAt) {
        this.createAt = createAt;
    }

}