import { NextFunction, Request, Response } from "express";
import { createBookToDB } from "./book.service";

export const createBook = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const book = await createBookToDB(data);
  res.status(200).json(
    {
      status: 'success',
      data: book
    }
  )
  console.log('req done in dev side')
};