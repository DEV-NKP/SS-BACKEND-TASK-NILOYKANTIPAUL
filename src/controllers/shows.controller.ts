import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { Shows } from 'src/models/shows.model';

//import { JwtAuthGuard } from '../middlewares/jwt-auth.guard';
import { ShowsService } from 'src/services/shows.service';

@Controller('shows')
export class ShowsController {
  constructor(private showsService: ShowsService) {}

  //@UseGuards(JwtAuthGuard)
  @Post('/createshow')
  async create(@Body() show: Shows): Promise<Shows> {
    return this.showsService.CreateShows(show);
  }

  @Get('/getallshows')
  async findAll(): Promise<Shows[]> {
    return this.showsService.FindAllShows();
  }

  @Get('/getoneshow/:id')
  async findOne(@Param('id') id: string): Promise<Shows> {
    return this.showsService.FindOneShow(id);
  }
}
