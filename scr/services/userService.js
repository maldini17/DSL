const UserRepository = require(`../repositories/UserRepository`);
class UserService {
    getAllUsers(){
        return UserRepository.findAll();
    }

    createUser(userData){
        return UserRepository.create(userData);
    }
    updateUser(userData){
        return UserRepository.update(userData);
    }
    deleteUser(userData){
        return UserRepository.delete(id);
    }
}
