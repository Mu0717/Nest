import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoService {
  get() {
    return '我是Demo';
  }
}
