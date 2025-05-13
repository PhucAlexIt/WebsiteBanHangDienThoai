package vn.id.phonestore.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.hibernate.annotations.ColumnDefault;

@Entity
@Table(name = "newstype")
public class Newstype {
    @Id
    @Column(name = "newsTypeID", nullable = false)
    private Integer id;

    @ColumnDefault("''")
    @Column(name = "name", nullable = false, length = 50)
    private String name;

    @ColumnDefault("'0'")
    @Column(name = "description", nullable = false)
    private String description;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

}