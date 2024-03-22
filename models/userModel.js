const mongoose =  require("mongoose")

const userSchema = mongoose.Schema({
    username : {
        type: String,
        required: [true, "Please add the user name"]
    },
    email : {
        type: String,
        required: [true, "Please Add the Email"],
        unique: [true, "Email address alreay taken"]
    },
    password:{
        type: String,
        required: [true, "Please Add the User Password"]
    }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("User", userSchema)