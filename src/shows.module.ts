import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShowsSchema } from './models/shows.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name:"Shows", schema:ShowsSchema}])
  ],
  controllers: [],
  providers: [],
})
export class ShowsModule {}