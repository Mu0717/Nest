import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

console.log(process.env);
async function bootstrap() {
  // 创建实力注册
  const app = await NestFactory.create(AppModule);
  // 设置全局路由前缀 ----> 请求路径需要改为 http://localhost/app/xxxx
  app.setGlobalPrefix('app');
  // 解决跨域问题
  app.enableCors();
  // 项目启动
  await app.listen(process.env.PORT ?? 300);
}
bootstrap();
