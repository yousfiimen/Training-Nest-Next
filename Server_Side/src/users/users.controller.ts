import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() body) {
    return this.usersService.create(body);
  }


  @Get()
  findUsers(@Query() query) {
    return this.usersService.findUsers(query);
  }

  @Get(':id')
  findUser(@Param() params) {
    return this.usersService.findUser(params);
  }

  @Put(':id')
  updateUser(@Param() params, @Body() body) {
    return this.usersService.updateUser(params, body);
  }


  @Put(':id')
  deleteUser(@Param() params) {
    return this.usersService.deleteUser(params);
  }







 
}

