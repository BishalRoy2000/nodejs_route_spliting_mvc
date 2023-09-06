// controllers namer folder baniye tar modhe user.js baniye tar modhe user routes er modhe kar sob function rakte hobe..
// jodi products routes thake tahole controllers folder er modhe products.js baniye tar modhe products routes er sob function rakte hobe.....

import {User} from "../models/user.js"; // models folder er user.js er "User" model ke import korlam....

// user routes er function....

export const getalluser=async(req,res)=>{

    const user=await User.find({});

    res.json({
        success:true,
        users:user
    })
}

export const createnewuser=async(req,res)=>{
    const {name,email,password}=req.body; 
    await User.create({ 
        name,
        email,
        password
    })

    res.status(201).cookie("tempo","lol").json({ 
        success:true,
        message:"Rigistered Successfully"
    })
}

export const getparams=(req,res)=>{
    console.log(req.query);
    console.log(req.query.keyword);
    console.log(req.query.category);
    console.log(req.query.page);
    res.json({
        success:true,
        message:"params"
    })
}

export const getdynamicurl=async(req,res)=>{
    const {id}=req.params; 
    const user=await User.findById(id);

    res.json({
        success:true,
        user:user
    })
}

export const getdynamicurlput=async(req,res)=>{
    const {id}=req.params; 
    const user=await User.findById(id);

    res.json({
        success:true,
        message:"updated"
    })
}
export const getdynamicurldelete=async(req,res)=>{
    const {id}=req.params; 
    const user=await User.findById(id);

    res.json({
        success:true,
        message:"deleted"
    })
}