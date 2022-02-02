import { Injectable } from '@nestjs/common';
import { IBook } from 'src/interfaces/book.interface';

@Injectable()
export class EbookService {

  ebooks: IBook[] = [];
}
