const router = require("express").Router();

const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    addFriend,
} = require("../../controllers/userController");

// localhost:3001/user
router.route("/")
    .get(getUser)
    .post(createUser);

// localhost:3001/api/user/:userId
router.route("/:userId")
    .get(getSingleUser)
    .put(updateUser);

// localhost:3001/api/users/:userId/friends/:friendId 
router.route("/:userId/friends/:friendId")
    .get(addFriend);

    module.exports = router;