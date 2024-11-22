import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
} from '@nestjs/common';

@Controller('pipe')
export class PipeController {
  @Get(':id')
  getPipe(@Param('id', ParseIntPipe) id: number) {
    return `getPipe${id}`;
  }
}
