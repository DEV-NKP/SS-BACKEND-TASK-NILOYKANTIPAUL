import * as mongoose from 'mongoose';

export const ShowsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  actors: [{ type: String }],
  crew: [
    {
    name: { type: String },
    role: { type: String }
    },
  ],
  runtime: { type: Number, required: true  },
  genres: { type: String , required: true }
});