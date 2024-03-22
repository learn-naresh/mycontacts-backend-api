const mongoose =  require("mongoose")

const contactSchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please Add the Contact Name"]
    },
    email : {
        type: String,
        required: [true, "Please Add the Email"]
    },
    phone:{
        type: String,
        required: [true, "Please Add the Phone number"]
    }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Contact", contactSchema)