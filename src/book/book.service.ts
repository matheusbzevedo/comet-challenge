import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IBook } from 'src/interfaces/book.interface';
import { v4 as uuidv4 } from 'uuid';

interface IAuthorPublisher {
  author?: string;
  publisher?: string;
}

@Injectable()
export class BookService {
  books: IBook[] = [];

  create(body: IBook) {
    const { author, name, publisher, summary, publication_year} = body;

    const bookExists = this.books.find(b => b.author === author && b.name === name);

    if (bookExists) throw new HttpException('There is already a book with this author!', HttpStatus.NOT_ACCEPTABLE);

    const book = {
      id: uuidv4(),
      name,
      author,
      publication_year,
      publisher,
      summary
    };

    this.books.push(book);

    return book;
  }

  getAll(): IBook[] {
    if (this.books.length === 0) throw new HttpException('There are no books registered!', HttpStatus.NOT_FOUND);
    
    return this.books;
  }

  getByAuthorPublisher(param: IAuthorPublisher): IBook[] {
    const { author, publisher } = param;
    let books;

    if (author === undefined) {
      books = this.books.filter(b => b.publisher.toLowerCase() === publisher.toLowerCase());
    } else {
      books = this.books.filter(b => b.author.toLowerCase() === author.toLowerCase());
    }

    if (books.length === 0) throw new HttpException('There are no books registered!', HttpStatus.NOT_FOUND);

    return books;
  }

  findOne(id: string): IBook {
    const bookExists = this.books.find(book => book.id === id);

    if (bookExists === undefined) throw new HttpException('Book not found!', HttpStatus.NOT_FOUND);

    return bookExists;
  }

  update(book: IBook, id: string): IBook {
    const bookExists = this.books.find(b => b.id === id);

    if (bookExists === undefined) throw new HttpException('Book not found!', HttpStatus.NOT_FOUND);

    this.books = this.books.map(b => b.id === id
      ? this.verifyOtherBooks(book, id) : b);

    return this.books.find(b => b.id === id);
  }

  verifyOtherBooks(book: IBook, id: string): IBook {
    console.log(id);
    const bookExists = this.books.find(b => b.id !== id && (book.name === b.name && book.author === b.author));

    if (bookExists) throw new HttpException('Book name and author already exist!', HttpStatus.FORBIDDEN);

    return {
      id,
      name: book.name,
      author: book.author,
      publisher: book.publisher,
      publication_year: book.publication_year,
      summary: book.summary
    };
  }
}
