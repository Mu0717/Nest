import { Module, Global } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

// @Global() // 注册为全局模块，即使别的模块不使用imports导入也可以使用
@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // 通过exports让模块共享可以在app.controller中使用,其他模块使用时一定要在module文件中imports引入
})
export class UserModule {}
