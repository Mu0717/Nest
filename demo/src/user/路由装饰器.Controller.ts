import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Request,
  Query,
  Headers,
  HttpCode,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /* @Get()
  // 使用Request装饰器由于是Get请求，在获取参数时需要req.query
  findAll(@Request() req) {
    console.log('req', req.query);
    return {
      code: 200,
      message: req.query.name,
    };
  } */
  @Get()
  // 使用Query装饰器则不需要像Request那样req.query
  findAll(@Query() query) {
    console.log('query', query);
    return {
      code: 200,
      message: query.name,
    };
  }

  /* @Post()
  // 使用Request装饰器由于是Post请求，在获取参数时需要req.body
  created(@Request() req) {
    console.log('req', req.body);
    return {
      code: 200,
      message: req.body.name,
    };
  } */

  @Post()
  // 使用Body装饰器则可以直接获取Body参数
  // created(@Body('name') body) { // 如果值需要获取某一个参数值，则可以传入key，只获取当前key的值，Request同理
  created(@Body() body) {
    console.log('body', body);
    return {
      code: 200,
      // message: body.name,
    };
  }

  /* @Get(':id') // 动态获取参数 :<string> :可以任意取名
  // 使用Request装饰器由于动态获取参数值，则需要通过req.params取值
  findId(@Request() req) {
    console.log('req', req.params);
    return {
      code: 200,
    };
  } */

  /* @Get(':id') // 动态获取参数 :<string> :可以任意取名
  // 使用Param装饰器则可以直接获取请求的参数
  findId(@Param() params) {
    console.log('params', params);
    return {
      code: 200,
    };
  } */

  /* @Get(':id') // 动态获取参数 :<string> :可以任意取名
  // 使用Headers装饰器获取请求头信息
  findId(@Headers() headers) {
    console.log('headers', headers);
    return {
      code: 200,
    };
  } */
  @Get(':id') // 动态获取参数 :<string> :可以任意取名
  @HttpCode(500) // 配置接口请求返回状态码
  findId() {
    return {
      code: 200,
    };
  }
}
