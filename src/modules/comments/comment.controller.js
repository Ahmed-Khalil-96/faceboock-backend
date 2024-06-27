import commentModel from "../../../DB/models/comments.model.js";

export const getComment= async(req, res, next)=>{

    const comments= await commentModel.findAll({where:{PostId:req.params.id}})
    return res.status(200).json({msg:"done", comments})
}


export const addComment = async(req, res, next)=>{  

    const {content, PostId, UserId}= req.body
    const comment = await commentModel.create({content,PostId,UserId})
   return res.status(201).json({msg:"done", comment})
}
export const updateComment = async(req, res, next)=>{

    const{content, UserId}= req.body
    const comment = await commentModel.update({content}, {where:{id:req.params.id , UserId:UserId}})
    if(!comment[0]){
       return res.status(404).json({msg:"comment cant be updated"})
    }
    return res.status(201).json({msg:"done" ,comment})
}
export const deleteComment = async(req, res, next)=>{
    const {UserId}=req.body
    const comment = await commentModel.destroy({where:{id:req.params.id, UserId:UserId}})

    if(!comment[0]){ 
       return res.status(404).json({msg:"comment not found"})
        } 

        return res.status(201).json({msg:"done" ,comment})
}