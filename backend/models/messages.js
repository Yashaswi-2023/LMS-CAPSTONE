const mongoose = require("mongoose");
const m1 = {
    conversationid : String,
    senderid: String,
    message:String,
    time : {
        type : Date,
        default : Date.now(),
    }
};
module.exports = mongoose.model("messages", m1);
