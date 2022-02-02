import { Module } from '@nestjs/common';
import { BookService } from 'src/book/book.service';
import { BookInventoryController } from './book-inventory.controller';
import { BookInventoryService } from './book-inventory.service';

@Module({
  controllers: [BookInventoryController],
  providers: [BookInventoryService, BookService],
})
export class BookInventoryModule {}
