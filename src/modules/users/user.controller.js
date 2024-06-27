
// ==========================Q.4======================

import userModel from "../../../DB/models/user.model.js";
import bcrypt from "bcrypt"
const saltRounds = 10;



export const addUser= async(req, res, next)=>{
const {userName, email, password, isLogin}= req.body

const hashedPassword = await bcrypt.hash(password, saltRounds);
    

const user = await userModel.findOrCreate({where:{email:email,userName:userName ,password:hashedPassword,isLogin:isLogin}})
// if(!user[1]){

//     return res.status(400).json({msg:"user already exist"})
   
// }
await userModel.update({isLogin:true},{where:{email}})
    return res.json({msg:"User is created successfully" , user:user})
}

export const userLogin = async(req, res, next)=>{
    const {email, password}= req.body
    const user = await userModel.findOne({where:{email}})
    const isMatch = await bcrypt.compare (password, user.password);

   
    if(!isMatch){
        return res.status(404).json({msg:"wrong email or password"})}
    if(user.isLogin){
        return res.json({msg:"user is already logged in", action:"Home Page"})
    } else{
        await userModel.update({isLogin:true},{where:{email}})
        return res.status(200).json({msg:"user is logged in successfully"})
}}


export const userLogout = async(req, res, next)=>{

    const {email}= req.body
     const user = await userModel.update({isLogin:false}, {where:{email}})
     if(user){
    return res.json({msg:"logged out successfully", user:user[0]})
}


}