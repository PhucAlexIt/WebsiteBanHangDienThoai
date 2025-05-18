package vn.id.phonestore.controller.moduleUser;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import vn.id.phonestore.dtos.UserDTO;
import vn.id.phonestore.entity.User;
import vn.id.phonestore.repository.moduleUser.UserRepository;
import vn.id.phonestore.service.moduleUser.UserService;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;

    }

    @GetMapping("/users")
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers();
    }


// 17.1.6: Hệ thống nhận yêu cầu API RESTFUL từ frontend.
// 17.1.7: Hệ thống gọi deleteUser(@PathVariable Integer id) trong lớp UserController để truy xuất lấy id.
    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable Integer id) {
        try {
            // 17.1.8: Hệ thống gọi deleteUser(id) của lớp UserService để kiểm tra id người dùng có tồn tại trong hệ thống.
            boolean deleted = userService.deleteUser(id);
            if (deleted) {
                // 17.1.12: Hệ thống hiển thị thông báo cho người quản trị "Thành công, đã xoá người dùng thành công".
                return ResponseEntity.ok("Đã xoá người dùng thành công");
            } else {
                // 17.2.12: Hệ thống hiển thị thông báo lỗi cho người quản trị "Thông báo, Không tìm thấy người dùng để xoá".
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Không tìm thấy người dùng");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Lỗi hệ thống khi xoá " + e.getMessage());
        }
    }

    }


