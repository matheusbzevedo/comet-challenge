import { IBook } from "./book.interface";

export interface IInventoryBook {
  id: string;
  book?: IBook;
  quantity: number;
}