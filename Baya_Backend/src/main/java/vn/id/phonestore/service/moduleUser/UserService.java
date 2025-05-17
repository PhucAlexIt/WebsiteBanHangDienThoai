package vn.id.phonestore.service.moduleUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.id.phonestore.dtos.UserDTO;
import vn.id.phonestore.entity.User;

import vn.id.phonestore.repository.moduleUser.UserRepository;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
            this.userRepository = userRepository;
        }

    public void deleteUser(UserDTO deleteDTO) {
        Integer id = deleteDTO.getId();
        String fullName = deleteDTO.getFullName();
         if (id != null && fullName != null) {
            User user = userRepository.getUserById(id);
            if (user != null && user.getFullName().equals(fullName)) {
                userRepository.deleteById(id);
            } else {
                throw new RuntimeException("Không tìm thấy ID: " + id + " và Tên: " + fullName);
            }
        }
        else {
            throw new RuntimeException("Thiếu thông tin, vui lòng nhập lại");
        }
    }



    }
