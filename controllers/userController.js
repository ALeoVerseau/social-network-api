const { User } = require("../models")

module.exports = {
    // get all users
    async getUser (req, res) {
        try {
            const user = await User.find();
            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // get one user by id
    async getSingleUser (req, res) {
        try {
            const user = await User.findOne({id: req.params.userId}).select("-__v");
            
            if (!user) {
                return res.status(404).json({message: "Invalid User :C"})
            }
            res.json("User has been found! C:")
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // create user
    async createUser (req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // update user
    async updateUser (req, res) {
        try {
            const user = await User.findOneAndUpdate({_id: req.params.userId }, req.body);

            if (!user) {
                return res.status(404).json({ message: "Invalid User ID :C" });
            }
            res.json("User ID has been updated C:")
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // add friend
    async addFriend (req, res) {
        try {
            const user = await User.findOneAndUpdate({_id: req.params.uderId});

            if (!user) {
                return res.status(404).json({ message: "Invalid User ID :C" });
            }

            res.json("New Friend Added C:");
        } catch (err) {
            res.status(500).json(err)
        }
    },
    
}