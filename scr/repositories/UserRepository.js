const crudRepository = require(`../lib/crudRepository`);
const User = require(`../models/User`);

class UserRepository extends crudRepository {
    constructor(){
        super(User);
    }
}
module.exports = new UserRepository();