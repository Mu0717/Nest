import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { WechatyBuilder } from 'wechaty';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('scan')
  getScan(@Res() res) {
    const bot = WechatyBuilder.build();
    bot
      .on('scan', async (qrcode, status) => {
        const code = `https://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`;
        this.appService.generateQrCode(encodeURIComponent(qrcode));
        // return { message: 'QR Code generated in terminal' };
        res.send(code);
        /* const qrCodeUrl = await this.appService.generateQrCode(code);
        res.type('image/png');
        res.send(qrCodeUrl); */
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
  }
}
