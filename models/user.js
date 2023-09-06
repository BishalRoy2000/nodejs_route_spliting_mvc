// models bole akta folder baniye tar modhe tar modhe user.js baniye ote database er user table er schema ar model rakte hobe......ar jodi products bole kono table tahake database a tahole.......tahole models folder er modhe products.js baniye tar modhe database er products table er schema and model rakte hobe.......
import mongoose from "mongoose";

// database schema define
const userschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

// database model define
export const User=mongoose.model("user",userschema); // ai User take export korechi and jei file a ata use korbo sekhane ata ke import korte hobe.