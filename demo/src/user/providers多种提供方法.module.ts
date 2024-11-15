import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserService2 } from './user.service2';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  // providers: [UserService], // providers的语法糖且最常用的写法
  providers: [
    UserService,
    {
      provide: 'UserService2', // 自定义名称
      useClass: UserService2,
    }, // 全称写法，控制器引入使用时需要通过@Inject('UserService2')修饰
    {
      provide: 'CustomInjectionValue',
      useValue: [1, 2, 3], // 自定义注入值
    },
    {
      provide: 'factory',
      inject: [UserService],
      useFactory(userService: UserService) {
        return userService;
      }, // 工厂模式: 如果服务之间有相互的依赖或者逻辑处理可以使用useFactory
    },
    {
      provide: 'sync',
      inject: [UserService],
      async useFactory(userService: UserService) {
        return await new Promise((resolve) => {
          setTimeout(() => {
            resolve(userService.sync());
          }, 5000);
        });
      }, // 异步模式
    },
  ],
})
export class UserModule {}
