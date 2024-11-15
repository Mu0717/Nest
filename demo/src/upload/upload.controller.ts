import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
  Res,
} from '@nestjs/common'; // 导入NestJS核心装饰器和函数
import { UploadService } from './upload.service'; // 导入相关的服务，这里是上传服务
import { FileInterceptor } from '@nestjs/platform-express'; // 导入NestJS的文件拦截器，用于处理文件上传
import { join } from 'path';
import type { Response } from 'express';
import { zip } from 'compressing';

@Controller('upload') // 声明这是一个控制器，基路由是/upload
export class UploadController {
  constructor(private readonly uploadService: UploadService) {} // 控制器的构造函数，注入了UploadService服务

  @Post('album') // 定义一个处理POST请求的路由，完整路径是/upload/album
  @UseInterceptors(FileInterceptor('file')) // 使用文件拦截器，拦截名为'file'的上传文件
  upload(@UploadedFile() file) {
    // 定义上传文件的处理函数，参数是上传的文件
    console.log(file); // 在控制台输出文件的相关信息
    return true; // 返回true作为响应
  }

  // 传统下载模式
  @Get('down')
  down(@Res() res: Response) {
    const url = join(__dirname, '../images/1731222599276.gif');
    res.download(url);
  }

  // 流式下载
  @Get('download')
  async download(@Res() res: Response) {
    const url = join(__dirname, '../images/1731222599276.gif'); // dist，文件路径
    const tarStream = new zip.Stream();
    await tarStream.addEntry(url);

    res.setHeader('Content-Type', 'application/octet-stream');

    res.setHeader('Content-Disposition', `attachment; filename=test`);

    tarStream.pipe(res);
  }
}
