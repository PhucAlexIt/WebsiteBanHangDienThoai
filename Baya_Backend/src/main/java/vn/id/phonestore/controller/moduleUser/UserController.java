package vn.id.phonestore.controller.moduleUser;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import vn.id.phonestore.dtos.UserDTO;
import vn.id.phonestore.service.moduleUser.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer id) {
        try {
            boolean deleted = userService.deleteUser(id);
            if (deleted) {
                return ResponseEntity.ok("Đã xoá người dùng thành công");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Không tìm thấy người dùng");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Lỗi hệ thống khi xoá " + e.getMessage());
        }
    }

    }


