import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ShowsSchema } from './models/shows.schema';
import { UserSchema } from './models/user.schema';
import { ShowsController } from './controllers/shows.controller';
import { ShowsService } from './services/shows.service';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://sayburgh:1234@shows.uwmtkpx.mongodb.net/nodejs-demo?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:"Shows", schema:ShowsSchema}]),
    MongooseModule.forFeature([{name:"User", schema:UserSchema}])
  ],
  controllers: [AppController,ShowsController,UserController],
  providers: [AppService,ShowsService,UserService],
})
export class AppModule {}
