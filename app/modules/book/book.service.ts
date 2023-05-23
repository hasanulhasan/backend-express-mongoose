import { IBook } from "./book.interface";
import { Book } from "./book.model";

export const createBookToDB = async (payload: IBook): Promise<IBook> => {
  const book = new Book(payload)
  await book.save();
  return book
}

export const getBooksByGenre = async (payload: string) => {
  const books = await Book.find({ genre: payload });
  return books
}

export const getBooksByGenreAndPublisher = async (payload1: string, payload2: string) => {
  const books = await Book.find({ genre: payload1, "publisher.name": payload2 });
  return books
}

export const makePriceInt = async () => {
  const books = await Book.updateMany(
    { publicationYear: { $gte: 2020 } },
    [
      {
        $set: {
          "price": {
            $toInt: "$price"
          }
        }
      }
    ]
  );
  return books
}