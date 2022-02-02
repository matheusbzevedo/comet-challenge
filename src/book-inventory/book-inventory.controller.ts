import { Body, Controller, Param, Post } from '@nestjs/common';
import { IInventoryBook } from 'src/interfaces/inventory-book.interface';
import { BookInventoryService } from './book-inventory.service';

@Controller('book-inventory')
export class BookInventoryController {
  
  constructor(
    private bookInventoryService: BookInventoryService,
  ) {}
  
  @Post('add/:bookId')
  async addQuantity(@Body() body: IInventoryBook, @Param() params) {
    const inventory = await this.bookInventoryService.addQuantity(body, params);

    return inventory;
  }

  @Post('remove/:bookId')
  async removeQuantity(@Body() body: IInventoryBook, @Param() params) {
    const inventory = await this.bookInventoryService.removeQuantity(body, params.bookId);

    return inventory;
  }
}
