const mongoose = require("mongoose")
const Schema = mongoose.Schema

const infoDB = new Schema({

    day: {
        type: Date,
        default: Date.now
    },

    info: [{

        interest:{
            type: String,
            trim: true,
        },
        education:{
            type: String,
            trim: true,
        },
        backgroud:{
            type: String,
            trim: true,
        },

    }]
})

