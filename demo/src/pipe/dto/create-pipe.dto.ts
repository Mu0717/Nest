import { IsNotEmpty, IsString } from 'class-validator';
export class CreatePipeDto {
  @IsNotEmpty({
    message: '不能为空',
  }) //验证是否为空
  @IsString({
    message: '必须为字符串',
  }) //是否为字符串
  name: string;

  @IsNotEmpty()
  age: number;
}
