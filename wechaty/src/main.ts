import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WechatyBuilder } from 'wechaty';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const bot = WechatyBuilder.build();
  bot
    .on('scan', (qrcode, status) => {
      console.log(
        `Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`,
      );
    })
    .on('login', (user) => console.log('登录成功：' + user))
    .on('message', (message) => console.log('收到消息：' + message))
    .on('friendship', (friendship) =>
      console.log('收到好友请求：' + friendship),
    )
    .on('room-invite', (invitation) =>
      console.log('收到入群邀请：' + invitation),
    )
    .start();
  console.log(111);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
