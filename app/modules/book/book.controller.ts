import { NextFunction, Request, Response } from "express";
import { createBookToDB, getBooksByGenre } from "./book.service";

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
  const books = await getBooksByGenre();
  res.status(200).json(
    {
      status: 'success',
      data: books
    }
  )
  console.log('books by genre shown in webpage')
}