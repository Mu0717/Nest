import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  get() {
    return '我是Config';
  }
}
