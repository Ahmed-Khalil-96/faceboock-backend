import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';



export const sequelize = new Sequelize('bq246xnt9nzrt3aewqyi', 'u160sypeem5553zs', 'kBmvZA3U9ErhMCqqQZJT', {
    host: 'bq246xnt9nzrt3aewqyi-mysql.services.clever-cloud.com',
    dialect:"mysql",
    dialectModule:mysql2

  });

const connection = async()=>{
    return await sequelize.sync({alter:false , force:false}).then(()=>{
        console.log("Database connected successfully");
    }).catch((err)=>{
        console.log({msg:"Database connection failed", err});
    })
}


export default connection