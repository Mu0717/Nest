import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { UserModule } from '../user/user.module';
import { ConfigModule } from '../config/config.module';
import { LoggerMiddleware } from '../logger/logger.middleware';

@Module({
  imports: [UserModule, ConfigModule.forRoot({ path: '/xxx' })],
  controllers: [DemoController],
  providers: [DemoService],
})
export class DemoModule {}
/* export class DemoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('user'); // 给user模块配置中间件
    consumer.apply(LoggerMiddleware).forRoutes({
      path: 'user', // 请求模块前缀
      method: RequestMethod.GET, // 设置请求类型,目前设置了只有GET类型才会进入中间件
    });
  }
} */
