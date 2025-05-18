package vn.id.phonestore.service.moduleUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.id.phonestore.dtos.UserDTO;
import vn.id.phonestore.entity.User;

import vn.id.phonestore.repository.moduleUser.UserRepository;


@Service
public class UserService {
    @Autowired
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
            this.userRepository = userRepository;
        }

    public boolean deleteUser(Integer id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }
}




