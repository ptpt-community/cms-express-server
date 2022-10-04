const express=require('express')
const { request } = require('express');

module.exports ={
    create: (request,response)=>{
            response.json({success:true})
    },
    read: (request,response)=>{
            response.json({success:true})
    } 
}
