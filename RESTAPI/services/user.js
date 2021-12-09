const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET =require('../config');

async function register(username, email, password) {

    const existing = await User.findOne({
        email
    });

    if (existing) {
        const error = new Error('User with this email already exists in the database');
        error.status(409);
        throw error;
    }


    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        username,
        email,
        password: hashedPassword
    });
console.log(user);
    await user.save();

    return { 
        _id: user._id,
        username: user.username,
        accessToken: createToken(user)
    };
}

async function login(email, password) {

    const user = await User.findOne({ email });

    if (!user) {
        const error = new Error('Incorrect email or password');
        error.status(401);
        throw error;
    }
console.log(password);
console.log(user.password);
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        const error = new Error('Incorrect email or password');
        error.status(401);
        throw error;
    }

       return { 
        _id: user._id,
        username: user.username,
        accessToken: createToken(user)
    };
}


function createToken(user) {
   const token = jwt.sign({
        _id: user._id,
        email: user.email,
        username: user.username
    }, 'Secret SoftUni');

    return token;

}
module.exports = {
    register,
    login
}