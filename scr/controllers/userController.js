const express = require(`express`);
const userService = require(`../service/userService`);
const router = express.Router();

router.get(`/`,async (rer, res)=>{
    const user = userService.getAllUser();
    res.json(users);
})
module.exports = router;