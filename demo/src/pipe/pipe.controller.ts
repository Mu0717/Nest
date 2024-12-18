import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Body,
  Query,
} from '@nestjs/common';
// import { PipePipe } from './pipe.pipe';
import { CreatePipeDto } from './dto/create-pipe.dto';
import { UpdatePipeDto } from './dto/update-pipe.dto';
@Controller('pipe')
export class PipeController {
  @Get(':id')
  getPipe(@Param('id', ParseIntPipe) id: number) {
    return `getPipe${id}`;
  }

  @Get()
  // getPipeList(@Query('name', PipePipe) query) { // 给@Query装饰器传递接受参数的key,此时的query === query.name
  // getPipeList(@Query(PipePipe) query) {
  getPipeList(@Query() query) {
    return `getPipeList${JSON.stringify(query)}`;
  }

  @Post()
  // createPipe(@Body(PipePipe) createPipeDto: CreatePipeDto) {
  createPipe(@Body() createPipeDto: CreatePipeDto) {
    // return `createPipe${JSON.stringify(createPipeDto)}`;
    return createPipeDto;
  }
}
