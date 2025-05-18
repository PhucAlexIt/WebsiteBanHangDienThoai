package vn.id.phonestore.service.moduleUser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.id.phonestore.dtos.UserDTO;
import vn.id.phonestore.entity.User;
import vn.id.phonestore.repository.moduleUser.UserRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(user -> new UserDTO(
                        user.getId(),
                        user.getFullName(),
                        user.getEmail(),
                        user.getPhoneNumber(),
                        user.getRoleID() != null ? user.getRoleID().getId() : null,
                        user.getCreateAt()
                ))
                .collect(Collectors.toList());
    }


    public boolean deleteUser(Integer id) {
        // 17.1.9: Nếu tồn tại, Hệ thống gọi deleteById(id) xoá người dùng của lớp userRepository.
        if (userRepository.existsById(id)) {
            // 17.1.10: Hệ thống nhận yêu cầu và thực hiện truy vấn xoá người dùng khỏi Database.
            userRepository.deleteById(id);
            // 17.1.11: Hệ thống trả về kết quả đã xoá thành công người dùng.
            return true;
        }
        // 17.2.11: Hệ thống trả về kết quả thất bại.
        return false;
    }
}
