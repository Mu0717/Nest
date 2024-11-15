import { Body, Controller, Get, Post, Req, Res, Session } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('code')
  /* 获取验证码接口  */
  ceratedCode(@Req() req, @Res() res) {
    const captcha = this.userService.svgCaptcha();
    console.log('captcha', captcha.text);
    req.session.code = captcha.text; // 将生成的验证码文本存储到请求的会话中
    // 通过res返回
    res.type('image/svg+xml');
    res.send(captcha.data);
  }

  /* 验证码校验接口 */
  @Post('cerate')
  cerateUser(@Body() body, @Session() session) {
    console.log('body', body);
    console.log('session', session, session.code);
    if (session.code.toLocaleLowerCase() === body.code.toLocaleLowerCase()) {
      return {
        message: '验证码正确',
      };
    } else {
      return {
        message: '验证码错误',
      };
    }
  }
}
