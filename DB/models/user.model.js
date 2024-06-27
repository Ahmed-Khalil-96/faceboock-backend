

// =============================Q.1=========================
import { DataTypes} from "sequelize";
import { sequelize } from "../connectionDB.js";



const userModel = sequelize.define('User',
    
    {userName:{

    type:DataTypes.STRING,
    allowNull:false

}, 
email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
}, 
password:{
    type:DataTypes.STRING,
    allowNull:false
},
isLogin:{
    type:DataTypes.BOOLEAN,
    allowNull:false
}


},{
    timestamps:true
})
export default userModel