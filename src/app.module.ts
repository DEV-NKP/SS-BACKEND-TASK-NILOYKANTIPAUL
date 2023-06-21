import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShowsSchema } from './models/shows.schema';
import { UserSchema } from './models/user.schema';
import { ShowsController } from './controllers/shows.controller';
import { ShowsService } from './services/shows.service';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { AdminGuard } from './middlewares/session.guard';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([{name:"Shows", schema:ShowsSchema}]),
    MongooseModule.forFeature([{name:"User", schema:UserSchema}]),
  ],
  controllers: [ShowsController,UserController],
  providers: [ShowsService,UserService,AdminGuard],
})
export class AppModule {}
