import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

// 主路径为 app 通过装饰器设置全局路由前缀 -----> 请求路径需要改为 http://localhost/app/xxxx
// @Controller('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // 1. 固定路径：
  // 可以匹配到 get请求，http://localhost:3000/app/list
  @Get('list')
  getHello(): string {
    return `Get-list/${this.appService.getHello()}`;
  }

  // 可以匹配到 post请求，http://localhost:3000/app/list
  @Post('list')
  create(): string {
    return 'Post-list';
  }

  // 2.通配符路径(?+* 三种通配符 )
  // 可以匹配到 get请求, http://localhost:3000/app/user_xxx
  @Get('user_*')
  getUser() {
    return 'getUser';
  }

  // 4.必须写在3的前面,如果写在3的后面因为匹配过程中， 发现@Put("list/:id")已经满足了,就不会继续往下匹配了，所以 @Put("list/user")装饰的方法应该写在它之前
  // 可以匹配到put请求，http://localhost:3000/app/list/user
  @Put('list/user')
  updateUser() {
    return { userId: 1 };
  }

  // 3.带参数路径
  // 可以匹配到put请求，http://localhost:3000/app/list/xxxx
  @Put('list/:id')
  update() {
    return 'update';
  }
}
