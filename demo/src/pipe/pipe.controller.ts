import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { PipePipe } from './pipe.pipe';

@Controller('pipe')
export class PipeController {
  @Get(':id')
  getPipe(@Param('id', ParseIntPipe) id: number) {
    return `getPipe${id}`;
  }

  @Get()
  // getPipeList(@Query('name', PipePipe) query) { // 给@Query装饰器传递接受参数的key,此时的query === query.name
  getPipeList(@Query(PipePipe) query) {
    console.log('query', query);
    return `getPipeList${JSON.stringify(query)}`;
  }
}
