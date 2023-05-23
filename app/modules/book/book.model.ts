import { Schema, model } from "mongoose";
import { IBook } from "./book.interface";

export const bookSchema = new Schema<IBook>({
  id: {type: String, required: true, unique: true},
  title: {
    type: String,
    required: true,
    unique: true
  },
  author: [{ type: String }],
  genre: {
    type: String,
    required: true
  },
  publicationYear: {
    type: Number,
    required: true
  },
  publisher: {
    name: { type: String, required: true },
    location: { type: String, required: true }
  },
  reviews: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true }
    }
  ],
  rating: {
    type: Number,
    required: true
  },
  price: {
    type: String,
    required: true
  },
});

export const Book = model<IBook>('Book', bookSchema)