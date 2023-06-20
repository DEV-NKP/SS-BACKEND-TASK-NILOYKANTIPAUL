import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    uname: { type: String, required: true },
    password: { type: String, required: true },
    post: { type: String, required: true },

});