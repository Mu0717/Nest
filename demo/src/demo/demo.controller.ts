import { Controller, Get, Inject } from '@nestjs/common';
import { DemoService } from './demo.service';
import { UserService } from '../user/user.service';
import { ConfigService } from '../config/config.service';

@Controller('demo')
export class DemoController {
  constructor(
    private readonly demoService: DemoService,
    private readonly userService: UserService, // 注册来自user模块共享的service服务
    private readonly configService: ConfigService, // 注册来自user模块共享的service服务
    @Inject('Config') private readonly Config: any,
  ) {}
  @Get()
  getDemo() {
    return this.demoService.get();
  }
  @Get('user-common')
  getUseCommon(): string {
    return this.userService.findAll(); // 使用来自user模块共享的service服务
  }

  @Get('config')
  getUseConfig(): string {
    return this.Config.baseApi + this.configService.get();
  }
}
