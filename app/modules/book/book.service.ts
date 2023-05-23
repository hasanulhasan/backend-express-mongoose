import { IBook } from "./book.interface";
import { Book } from "./book.model";

export const createBookToDB = async (payload: IBook): Promise<IBook> => {
  const book = new Book(payload)
  await book.save();
  return book
}

export const getBooksByGenre = async () => {
  const books = await Book.find({ genre: "Fantacy" });
  return books
}

export const getBooksByGenreAndPublisher = async () => {
  const books = await Book.find({ genre: "Sci-Fi", "publisher.name": "Roli Books" });
  return books
}