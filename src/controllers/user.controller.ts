import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { User } from 'src/models/user.model';
import { UserService } from 'src/services/user.service';

//import { JwtAuthGuard } from '../middlewares/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  //@UseGuards(JwtAuthGuard)
  @Post('/signup')
  async signup(@Body() user: User): Promise<User> {
    return this.userService.CreateUser(user);
  }

  @Post('/createadmin')
  async CreateAdmin(@Body() user: User): Promise<User> {
    return this.userService.CreateAdmin(user);
  }

  @Get('/getallusers')
  async findAll(): Promise<User[]> {
    return this.userService.FindAllUsers();
  }


}
