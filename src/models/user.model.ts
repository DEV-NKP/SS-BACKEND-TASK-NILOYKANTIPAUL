import { Document } from 'mongoose';

export interface User extends Document {
    uname: string;
    password: string;
    post: string; 
  }