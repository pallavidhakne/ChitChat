//chatname
//isgroupchat
//users
//lastetmessage
//groupadmin

import mongoose from mongoose
const chatModel=mongoose.Schema(
    {
        chatName:{
            type:String,
            trim:true,
            Required:true
        },
        isgroupchat:{
            type:Boolean,
            default:false
        },
        users:[
            {
                type:mongoose.Schema.Type.ObjectId,
                ref:"User",
            },
        ],
        latestMessage:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",
        },
        groupAdmin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
},{
    timestamps:true,
});

const Chat=mongoose.model("Chat",chatModel);
export default Chat;