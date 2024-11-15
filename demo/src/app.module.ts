import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoModule } from './demo/demo.module';
import { UserModule } from './user/user.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [DemoModule, UserModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('user'); // 给user模块配置中间件
    consumer.apply(LoggerMiddleware).forRoutes({
      path: 'user', // 请求模块前缀
      method: RequestMethod.GET, // 设置请求类型,目前设置了只有GET类型才会进入中间件
    });
  }
}
// export class AppModule {}
