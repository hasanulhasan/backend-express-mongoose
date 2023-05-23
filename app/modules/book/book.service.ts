import { IBook } from "./book.interface";
import { Book } from "./book.model";

export const createBookToDB = async (payload: IBook): Promise<IBook>  => {
  const book = new Book(payload)
  await book.save();
  return book
}