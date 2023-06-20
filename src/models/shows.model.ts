import { Document } from 'mongoose';

export interface Shows extends Document {
    name: string;
    actors: string[];
    crew: { name: string; role: string }[];
    runtime: number;
    genres: string[];
  }