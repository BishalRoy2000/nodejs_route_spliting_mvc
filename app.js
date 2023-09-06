import express from "express";
import userroutes from "./routes/user.js"; // routes folder er user.js a jeta export korechilam seta import korlam
import { config } from "dotenv"; // dotenv module theke config ke import korlam....

export const app=express(); // ata export korechi server file a import korbo.....

config({
    path:"./data/config.env"
})

// midle ware
app.use(express.json());
app.use("/users", userroutes); // routes folder er user.js er user er sob routes ke access korte parbo ai midle ware diye....
// opore midle ware a app.use er modhe "/users" use korechi prefix hisabe ....karon routes folder er user.js er modhe joto user routes ache sob kota te "/users" common.....tai okene sob kota routes a "/users" na likhe akhane prefix add kore diye chi "/users" name...

//-----------------------------------------------------------------------------------------------------------------------------------------------

app.get("/",(req,res)=>{
    res.send("nice work");
})

//------------------------------------------------------------------------------------------------------------------------------------------------

