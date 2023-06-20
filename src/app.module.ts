import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ShowsModule } from './shows.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://sayburgh:1234@shows.uwmtkpx.mongodb.net/nodejs-demo?retryWrites=true&w=majority'),
  ShowsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
