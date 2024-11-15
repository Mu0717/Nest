import { Module } from '@nestjs/common'; // 导入NestJS的模块装饰器
import { UploadService } from './upload.service'; // 导入上传服务
import { UploadController } from './upload.controller'; // 导入上传控制器
import { MulterModule } from '@nestjs/platform-express'; // 导入NestJS中用于处理文件上传的Multer模块
import { diskStorage } from 'multer'; // 导入multer的diskStorage存储引擎
import { extname, join } from 'path'; // 导入Node.js的path模块用于处理文件路径和扩展名

@Module({
  imports: [
    MulterModule.register({
      // 配置Multer模块
      storage: diskStorage({
        // 使用磁盘存储引擎
        destination: join(__dirname, '../images'), // 设置文件存储位置，这里是相对于当前文件位置上级目录的images文件夹
        filename: (_, file, callback) => {
          // 定义存储的文件名
          const fileName = `${new Date().getTime() + extname(file.originalname)}`; // 使用当前时间戳加原始文件的扩展名作为文件名
          return callback(null, fileName); // 调用callback函数设置文件名
        },
      }),
    }),
  ],
  controllers: [UploadController], // 注册上传控制器
  providers: [UploadService], // 注册上传服务
})
export class UploadModule {} // 导出模块类
