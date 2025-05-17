package vn.id.phonestore.repository.moduleUser;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.id.phonestore.entity.User;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User getUserByUserID(Integer userID);
    List<User> findByFullName(String fullName);

}
