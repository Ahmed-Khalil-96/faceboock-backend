import commentModel from "../../../DB/models/comments.model.js";
import postModel from "../../../DB/models/post.model.js";
import userModel from "../../../DB/models/user.model.js";

export const getPost = async(req, res, next)=>{
    const post = await postModel.findByPk(req.params.id, {
        attributes: {
           exclude: ['id']
        }});
        const {Author} = post
        const user = await userModel.findByPk(Author,{attributes:{exclude:["id", "isLogin","createdAt","updatedAt","password"]}})
    return res.status(200).json({post:post, user:user})
}


export const addPost = async(req, res, next)=>{
    const {title , content , author}= req.body
    const post = await postModel.create({title:title, content:content, isDeleted:false,Author:author})
    return res.status(201).json({msg:"done", post})
} 
export const updatePost= async(req, res, next)=>{

    const {title , content, author}= req.body
    const post = await postModel.update({title,content}, {where:{id:req.params.id, Author:author}})
    if(!post[0]){
    return res.status(400).json({Msg:"you can't update this post"})}

    const updated = await postModel.findByPk(req.params.id, {
        attributes: {
           exclude: ['id']
        }})
    return res.status(200).json({msg:"post updated successfully", updated})
}

export const deletePost = async(req, res, next)=>{
    const {author}=req.body
    const post = await postModel.destroy({where:{id:req.params.id, Author:author}})

    if(!post){
        return res.status(400).json({Msg:"you can't delete this post"})
    }
    return res.status(200).json({msg:"post is deleted successfully"})
}

// ==========================Q.7=======================
export const softDeletePost = async(req, res, next)=>{
    const {author}=req.body
    const post = await postModel.update({isDeleted:true},{where:{id:req.params.id, Author:author}})
    if(!post[0]){
        return res.status(400).json({Msg:"you can't delete this post"})
    }
    return res.status(200).json({msg:"post is soft deleted successfully"})
}

// ==========================Q.9======================
export const specificPost = async(req, res, next)=>{
    let commentUser= ''
    const post = await postModel.findByPk(req.params.id)
    const {Author}= post
    const user = await userModel.findByPk(Author,{attributes:{exclude:["id"]}})
    const comments = await commentModel.findAll({where:{postId:req.params.id}})
    console.log(comments);

    if(!post){
        return res.status(404).json({msg:"post isn't found"})
    }

    for(let i = 0 ; i<comments.length; i++){}
    
    return res.status(200).json({msg:"done",post:post,owner:user,allComments:comments})
}