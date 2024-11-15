import { Controller, Get, Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { UserService2 } from './user.service2';
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject('UserService2') private readonly userService2: UserService2,
    @Inject('CustomInjectionValue') private readonly numList: number[],
    @Inject('factory') private readonly factory: UserService,
    @Inject('sync') private readonly sync: any,
  ) {}
  @Get()
  get(): string {
    return this.userService.findAll();
  }

  @Get('service2')
  get2(): string {
    return this.userService2.getHello();
  }

  @Get('custom')
  get3(): number[] {
    return this.numList;
  }

  @Get('factory')
  get4(): string {
    return this.factory.findAll();
  }

  @Get('sync')
  get5(): string {
    console.log(this.sync);
    return this.sync;
  }
}
