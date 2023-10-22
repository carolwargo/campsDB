const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema(
    {
        name: {
        type: String,
        required: true,
        },
        description: {
            type: String,
        },
        date: {
        type: String,
        },
        
    },
    );
    const Session = model('Session', sessionSchema);

    module.exports = Session;
    