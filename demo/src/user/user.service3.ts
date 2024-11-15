import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService3 {
  getHello() {
    return 'service3';
  }
}
