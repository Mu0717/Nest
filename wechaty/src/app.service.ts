import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';
import * as qrcodeTerminal from 'qrcode-terminal';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  /* async generateQrCode(data: string): Promise<Buffer> {
    try {
      return await QRCode.toBuffer(data);
    } catch (err) {
      throw new Error('Failed to generate QR code');
    }
  } */
  generateQrCode(data: string) {
    qrcodeTerminal.generate(data, { small: true }, (code) => {
      console.log(code);
    });
  }
}
