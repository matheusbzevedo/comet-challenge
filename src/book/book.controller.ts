import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { IBook } from 'src/interfaces/book.interface';
import { BookService } from './book.service';

@Controller('book')
export class BookController {

  constructor(
    private bookService: BookService
  ) {}

  @Post()
  async createBook(@Body() body: IBook) {
    const createdBook = await this.bookService.create(body); 

    return createdBook;
  }

  @Get()
  async getAllBooks() {
    const books = await this.bookService.getAll();

    return books;
  }

  @Get(':id')
  async findOneBook(@Param() params) {
    const book = await this.bookService.findOne(params.id);

    return book;
  }

  @Get('/author/:author')
  async findByAuthors(@Param() params) {
    const books = await this.bookService.getByAuthorPublisher(params);

    return books;
  }

  @Get('/publisher/:publisher')
  async findByPublisher(@Param() params) {
    const books = await this.bookService.getByAuthorPublisher(params);

    return books;
  }

  @Put(':id')
  async update(@Body() body, @Param() params) {
    const book = await this.bookService.update(body, params.id);

    return book;
  }
}
