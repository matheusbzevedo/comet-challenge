import { Module } from '@nestjs/common';
import { BookInventoryModule } from './book-inventory/book-inventory.module';
import { EbookModule } from './ebook/ebook.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [BookInventoryModule, EbookModule, BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
