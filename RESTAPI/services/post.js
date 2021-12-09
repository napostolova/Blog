const Post = require('../models/Post');

async function getAll() {
    return  Post.find({});
}

async function create(data) {
    const result = new Post(data);
    await result.save();

    return result;
}

async function getOneById(id) {
    return  Post.findOne({_id: id});
    
}

async function update(original, updated) {
    Object.assign(original, updated);
    await original.save();

    return original;

}
async function remove(id) {
    return  Post.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    getOneById,
    create,
    update,
    remove

};