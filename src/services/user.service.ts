import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/models/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService{

    constructor(@InjectModel('User') private userModel: Model<User>){}

    async CreateUser(user: User): Promise<User> {
        user.post="USER";
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(user.password, salt);
        user.password= hassedpassed;
        const newshow = new this.userModel(user);
        return newshow.save();
      }

      async CreateAdmin(user: User): Promise<User> {
        user.post="ADMIN";
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(user.password, salt);
        user.password= hassedpassed;
        const newshow = new this.userModel(user);
        return newshow.save();
      }


       FindAllUsers(): Promise<User[]> {
        return this.userModel.find().exec();
      }
    
      async Login (user: User): Promise<User | undefined> {
        const uname=user.uname;
        const finduser= await this.userModel.findOne({ uname }).exec();
      if(finduser)  
      {
      const isMatch= await bcrypt.compare(user.password, finduser.password);
       if(isMatch)
       {
        return user;
       }
       else{
        return undefined
       }

        }
        else{
        return undefined
       }
      }

   
}