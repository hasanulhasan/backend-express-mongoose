import { NextFunction, Request, Response } from "express";
import { createBookToDB, getBooksByGenre, getBooksByGenreAndPublisher, makePriceInt } from "./book.service";

export const createBook = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const book = await createBookToDB(data);
  res.status(200).json(
    {
      status: 'success',
      data: book
    }
  )
  console.log('book added')
};

export const getByGenre = async (req: Request, res: Response, next: NextFunction) => {
  const { genre } = req.params;
  const books = await getBooksByGenre(genre);
  res.status(200).json(
    {
      status: 'success',
      data: books
    }
  )
  console.log(`books by ${genre} shown in webpage`)
}

export const getByGenreAndPublisher = async (req: Request, res: Response, next: NextFunction) => {
  const { genre, publisher } = req.params;
  const books = await getBooksByGenreAndPublisher(genre, publisher);
  res.status(200).json(
    {
      status: 'success',
      data: books
    }
  )
  console.log(`books by ${genre} and ${publisher} shown in webpage`)
}

export const makeInt = async (req: Request, res: Response, next: NextFunction) => {
  const books = await makePriceInt();
  res.status(200).json(
    {
      status: 'success',
      data: books
    }
  )
  console.log(`type of price of ${books.modifiedCount} books updated`)
}