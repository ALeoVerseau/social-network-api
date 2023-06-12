const router = require("express").Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction
} = require("../../controllers/thoughtController");

// localhost:3001/api/thoughts
router.route("/")
    .get(getThoughts)
    .get(createThought);

// localhost:3001/api/thoughts/:thoughtId
router.route("/:thoughtId")
    .get(getSingleThought)
    .get(updateThought)
    .delete(deleteThought);

// localhost:3001/api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions")
    .post(createReaction)

module.exports = router;