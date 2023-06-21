import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { AdminGuard } from 'src/middlewares/session.guard';
import { Shows } from 'src/models/shows.model';
import { ShowsService } from 'src/services/shows.service';

@Controller('shows')
export class ShowsController {
  constructor(private showsService: ShowsService) {}

  @UseGuards(AdminGuard)
  @Post('/createshow')
  async create(@Body() show: Shows): Promise<Shows> {
    return this.showsService.CreateShows(show);
  }

  @Get('/getallshows')
  async findAll(): Promise<Shows[]> {
    return this.showsService.FindAllShows();
  }

  @Get('/getallmovies')
    async findAllMovies(): Promise<Shows[]> {
      return this.showsService.FindAllMovies();
    }
    
  @Get('/getalltvshows')
    async findAllTvShows(): Promise<Shows[]> {
      return this.showsService.FindAllTvShows();
    }
    
  @Get('/getoneshow/:id')
  async findOne(@Param('id') id: string): Promise<Shows> {
    return this.showsService.FindOneShow(id);
  }
}
