const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[ true, 'Title is required'],
        minLength: [5 , 'Title must be at least 5 symbols']
    },
     description: {
        type: String,
        required: [ true, 'Description is required'],
        minLength: [10 , 'Description must be at least 10 symbols']
    },
    imageUrl: {
        type: String,
        required:[ true, 'Image is required']
    },   
    region: {
        type: String,
        required:[ true, 'Region is required']
    },  
    likes: [{
        type: ObjectId,
        ref: "User"
    }],
    comments: [{
        type: ObjectId,
        ref: "User"
    }],
    ownerId: {
        type: ObjectId,
        ref: "User"
    },
    // recents: [{
    //     type: ObjectId,
    //     ref: "Recent"
    // }],
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Post', postSchema);
