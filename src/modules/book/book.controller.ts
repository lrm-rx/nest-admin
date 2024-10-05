import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('book')
export class BookController {
  @Get(':id')
  gutBook(@Param('id', ParseIntPipe) id: number) {
    return 'get book:' + id
  }
}
