import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BookService } from 'src/book/book.service';
import { IBook } from 'src/interfaces/book.interface';
import { IInventoryBook } from 'src/interfaces/inventory-book.interface';
import { v4 as uuidv4 } from 'uuid';

interface IParams {
  bookId: string;
}

@Injectable()
export class BookInventoryService extends BookService {
  bookInventory: IInventoryBook[] = [];
  books: IBook[];

  addQuantity(body: IInventoryBook, params: IParams) {
    const { quantity } = body;
    const { bookId } = params;

    if (this.books.length === 0) throw new HttpException('There is not books registered!', HttpStatus.NOT_FOUND);
    if (quantity < 0) throw new HttpException('Quantity is wrong!', HttpStatus.FORBIDDEN);

    return body;
  }

  removeQuantity(body: IInventoryBook, bookId: string) {
    return body;
  }
}
