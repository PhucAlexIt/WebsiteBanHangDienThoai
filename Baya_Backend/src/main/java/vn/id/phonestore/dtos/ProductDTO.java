package vn.id.phonestore.dtos;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import vn.id.phonestore.entity.Product;

import java.time.Instant;

public class ProductDTO {
    private String productID;
    private String name;
    private String description;
    private int price;
    private String img;
    private int categoryID;
    private Integer quanlityStock;
    private Integer quanlitySell;
    public ProductDTO(String productID, String name, String description, int price, String img, int categoryID, Integer quanlityStock, Integer quanlitySell) {
        this.productID = productID;
        this.name = name;
        this.description = description;
        this.price = price;
        this.img = img;
        this.categoryID = categoryID;
        this.quanlityStock = quanlityStock;
        this.quanlitySell = quanlitySell;

    }
    public ProductDTO() {

    }

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public int getCategoryID() {
        return categoryID;
    }

    public void setCategoryID(int categoryID) {
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


    @Override
    public String toString() {
        return "ProductDTO{" +
                "productID='" + productID + '\'' +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", img='" + img + '\'' +
                ", categoryID=" + categoryID +
                ", quanlityStock=" + quanlityStock +
                ", quanlitySell=" + quanlitySell +

                '}';
    }
    public ProductDTO convertToDTO(Product product) {

         ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(product, ProductDTO.class);
    }
}
