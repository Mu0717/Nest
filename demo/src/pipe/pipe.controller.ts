import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Body,
} from '@nestjs/common';
import { CreatePipeDto } from './dto/create-pipe.dto';
// import { UpdatePipeDto } from './dto/update-pipe.dto';
import { PipePipe } from './pipe.pipe';

@Controller('pipe')
export class PipeController {
  @Get(':id')
  getPipe(@Param('id', ParseIntPipe) id: number) {
    return `getPipe${id}`;
  }

  @Post('create')
  createPipe(@Body(PipePipe) createPipeDto: CreatePipeDto) {
    return `createPipe${JSON.stringify(createPipeDto)}`;
  }
}
