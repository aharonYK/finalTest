const express = require('express')
const {validate,Post} = require('../models/posts')
const router = express.Router()
const axios = require("axios");

//get from jasonholder
 router.get('/all',async (req,res)=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    var data = await response.json();
    console.log(data);
for(i=0;i<data.length;i++){
    let post = new Post({
        id: data[i].id,
        userId: data[i].userId,
        title: data[i].title,
        body : data[i].body
    });
    post = await post.save()

}
    res.send(data);
});

//get by userId
router.get('/:userId',async (req, res)=>{
    const post= await Post.find({userId:req.params.userId});
    if(!post)
        res.status(400).send('this userId is not valid ')
    res.send(post)

});



module.exports = router