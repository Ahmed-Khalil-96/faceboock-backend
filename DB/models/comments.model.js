// ==================================Q.3==================================

import { DataTypes } from "sequelize";
import { sequelize } from "../connectionDB.js";
import postModel from "./post.model.js";
import userModel from "./user.model.js";

const commentModel=sequelize.define("Comment",{

    content:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{timestamps:true})

postModel.hasMany(commentModel,{onDelete:"CASCADE", onUpdate:"CASCADE"})
commentModel.belongsTo(postModel)
userModel.hasMany(commentModel,{onDelete:"CASCADE",onUpdate:"CASCADE"});
commentModel.belongsTo(userModel);



export default commentModel
