import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shows } from '../models/shows.model';

@Injectable()
export class ShowsService{

    constructor(@InjectModel('Shows') private showsModel: Model<Shows>){}

    CreateShows(show: Shows): Promise<Shows> {
        const newshow = new this.showsModel(show);
        return newshow.save();
      }

       FindAllShows(): Promise<Shows[]> {
        return this.showsModel.find().exec();
      }
    
       FindOneShow(id: string): Promise<Shows> {
        return this.showsModel.findById(id).exec();
      }


}