const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema(
    {
        sessionName: {
        type: String,
        required: true,
        },
        sessionDate: {
        type: Date,
        },
    },
    {
        toJSON: {
        virtuals: true,
        },
    }
    );
    const Session = model('Session', sessionSchema);

    module.exports = Session;
    