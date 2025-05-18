package vn.id.phonestore.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;

@Entity
@Table(name = "products")
@Data
public class Product {
    @Id
    @Column(name = "productID", nullable = false)

    @JsonProperty("productID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer productID;

    @Column(name = "name")
    @JsonProperty("name")
    private String name;

    @Column(name = "price")
    @JsonProperty("price")
    private Double price;

    @Lob
    @Column(name = "description")
    @JsonProperty("description")
    private String description;

    @Column(name = "img")
    @JsonProperty("img")
    private String img;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "categoryID")
    @JsonProperty("category")
    private Category category;

    @Column(name = "quanlityStock")
    @JsonProperty("quanlityStock")
    private Integer quanlityStock;

    @Column(name = "quanlitySell")
    @JsonProperty("quanlitySell")
    private Integer quanlitySell;

    @Column(name = "createAt")
    @JsonProperty("createAt")
    @CreationTimestamp
    private Instant createAt;

    @Column(name = "discountDefault")
    @JsonProperty("discountDefault")
    private Integer discountDefault;

    @Override
    public String toString() {
        return "Product{" +
                "productID=" + productID +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", description='" + description + '\'' +
                ", img='" + img + '\'' +
                ", category=" + category +
                ", quanlityStock=" + quanlityStock +
                ", quanlitySell=" + quanlitySell +
                ", createAt=" + createAt +
                ", discountDefault=" + discountDefault +
                '}';
    }
}