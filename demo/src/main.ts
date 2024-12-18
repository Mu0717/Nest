import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common'; // 引入版本控制工具 https://nest.nodejs.cn/techniques/versioning
import { AppModule } from './app.module';
import * as session from 'express-session'; // session 是服务器 为每个用户的浏览器创建的一个会话对象 这个session 会记录到 浏览器的 cookie 用来区分用户
import { logger } from './logger/logger.middleware';
import { Response } from './common/response';
import { NestExpressApplication } from '@nestjs/platform-express';
import { HttpFilter } from './common/filter';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useStaticAssets(join(__dirname, 'images'), {
    prefix: '/images',
  });
  app.use(logger); // 设置全局中间件
  app.useGlobalInterceptors(new Response()); // 设置响应拦截器
  app.useGlobalFilters(new HttpFilter()); // 设置异常拦截器
  app.use(
    session({
      secret: 'mu', //生成服务端session签名
      name: 'mu.sid', //生成客户端cookie 的名字 默认 connect.sid
      cookie: {
        maxAge: null,
      }, //设置返回到前端 key 的属性，默认值为{ path: ‘/’, httpOnly: true, secure: false, maxAge: null }。
      rolling: true, //在每次请求时强行设置 cookie，这将重置 cookie 过期时间(默认:false)
    }),
  );
  app.useGlobalPipes(new ValidationPipe()); // 全局注册DTO管道验证
  app.enableCors();
  /* app.enableCors({
    origin: 'http://localhost:5500', // 设置允许跨域域名
    credentials: true, // 允许跨域请求携带cookie
  }); */
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
