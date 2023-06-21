import { Controller, Get, Param, Post, Body, UseGuards,Request } from '@nestjs/common';
import { AdminGuard } from 'src/middlewares/session.guard';
import { User } from 'src/models/user.model';
import { UserService } from 'src/services/user.service';


@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}


  @Post('/signup')
  async signup(@Body() user: User): Promise<User | any> {
    const getuser= await this.userService.CreateUser(user);
    if(getuser!=undefined)
    {
      return getuser;
    }
    else{
      return "Username already taken."
    }
  }
  
  @Post('/createadmin')
  @UseGuards(AdminGuard)
  async CreateAdmin(@Body() user: User): Promise<User | any> {
    const getuser= await this.userService.CreateAdmin(user);
    if(getuser!=undefined)
    {
      return getuser;
    }
    else{
      return "Username already taken."
    }
  }

  @Get('/getallusers')
  @UseGuards(AdminGuard)
  async findAll(): Promise<User[]> {
    return this.userService.FindAllUsers();
  }

  @Post('/login')
  async Login(@Body() user: User, @Request() req): Promise<User | any> {
    const getuser= await this.userService.Login(user);
    if(getuser!=undefined)
    {
      req.res.cookie('uname', getuser.uname);
      req.res.cookie('post', getuser.post);
      return getuser;
    }
    else{
      return "Invalid Username or Password"
    }
  }

   @Get('/logout')
   logout(@Request() req)
   {
    req.res.clearCookie("uname");
    req.res.clearCookie("post");
    req.res.end()
   }
}
