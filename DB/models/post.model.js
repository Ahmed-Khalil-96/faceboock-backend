// ===============Q.2===========================
import { DataTypes } from "sequelize";
import { sequelize } from "../connectionDB.js";
import userModel from "./user.model.js";

const postModel=sequelize.define("Post",{

    title:{type:DataTypes.STRING,
        allowNull:false
    },
    content:{type:DataTypes.STRING,
        allowNull:false
    },
    isDeleted:{
        type:DataTypes.BOOLEAN ,
        allowNull:false
    }
},{timestamps:true})

postModel.belongsTo(userModel,{foreignKey:{name:"Author"}, onDelete:"CASCADE", onUpdate:"CASCADE"})
userModel.hasMany(postModel,{foreignKey:{name:"Author"}})

export default postModel