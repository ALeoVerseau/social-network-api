const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        username: {
            type: true,
            required: true
        },
        reaction: [Reaction] 
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false 
    }
); 

thoughtSchema.virtual("reactionCount").get(function() {
    return this.reaction.length 
})

const Thots = model("thought", thoughtSchema);

module.exports = Thots