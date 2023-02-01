const mongoose = require('mongoose')
const Joi = require('joi')

const Post = new mongoose.model('Post', new mongoose.Schema({
    userId:{
        type: Number,
        required : true 
    },
    id:{
        type: Number,
        required : true
    },
    title:{
        type: String,
        required : true
    },
    body:{
        type: String,
        required : true
            
        }
    }
) ) 


function vaidatePost(post){
    const schema = {
        title: Joi.string().required(),
        body: Joi.string().required(),
        ID: Joi.number().required(),
        userId: Joi.number().required()
    };

    return Joi.validate(post,schema)
}

exports.Post= Post;
exports.validate = vaidatePost