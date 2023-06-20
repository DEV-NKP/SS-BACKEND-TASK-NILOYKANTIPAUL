import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/models/user.model';


@Injectable()
export class UserService{

    constructor(@InjectModel('User') private userModel: Model<User>){}

    CreateUser(user: User): Promise<User> {
        user.post="USER";
        const newshow = new this.userModel(user);
        return newshow.save();
      }

      CreateAdmin(user: User): Promise<User> {
        user.post="ADMIN";
        const newshow = new this.userModel(user);
        return newshow.save();
      }


       FindAllUsers(): Promise<User[]> {
        return this.userModel.find().exec();
      }
    
    

   
}