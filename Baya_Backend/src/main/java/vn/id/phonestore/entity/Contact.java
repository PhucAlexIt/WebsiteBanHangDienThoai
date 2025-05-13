package vn.id.phonestore.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;

@Entity
@Table(name = "contact")
public class Contact {
    @Id
    @Column(name = "contactID", nullable = false)
    private Integer id;

    @ColumnDefault("'0'")
    @Column(name = "fullname", nullable = false, length = 50)
    private String fullname;

    @Lob
    @Column(name = "phoneNumber", nullable = false)
    private String phoneNumber;

    @ColumnDefault("'0'")
    @Column(name = "email", nullable = false, length = 50)
    private String email;

    @ColumnDefault("'0'")
    @Column(name = "message", nullable = false, length = 50)
    private String message;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "userID", nullable = false)
    private User userID;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public User getUserID() {
        return userID;
    }

    public void setUserID(User userID) {
        this.userID = userID;
    }

}