const { Thots } = require("../models");

module.exports = {
    // get thoughts
    async getThoughts(req, res) {
        try {
            const thot = await Thots.find();
            res.json(thot)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // get single thought
    async getSingleThought (req, res) {
        try {
            const thot = await Thots.findOne({id: req.params.thoughtId}).select("-__v");
            
            if (!thot) {
                return res.status(404).json({message: "Invalid Thot :C"})
            }
            res.json("Thot has been found! C:")
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // create thought
    async createThought (req, res) {
        try {
            const thot = await Thots.create(req.body);
            res.json(thot)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // update user
    async updateThought (req, res) {
        try {
            const thot = await Thots.findOneAndUpdate({_id: req.params.thoughtId }, req.body);

            if (!thot) {
                return res.status(404).json({ message: "Invalid Thought ID :C" });
            }
            res.json("Thought ID has been updated C:")
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // create a new reaction 
    async createReaction (req, res) {
        try {
            const thot = await Thots.findOneAndUpdate({_id: req.params.thoughtId});

            if (!thot) {
                return res.status(404).json({ message: "Invalid Thought ID :C" });
            }

            res.json("New Reaction Added C:");
        } catch (err) {
            res.status(500).json(err)
        }
    },
    
}