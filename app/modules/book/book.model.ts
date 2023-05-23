import { Schema, model } from "mongoose";
import { BookModel, IBook, IBookMethods } from "./book.interface";

export const bookSchema = new Schema<IBook, BookModel, IBookMethods>({
  id: { type: String, required: true, unique: true },
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

//static function
bookSchema.static('getRatedBooks', async function getRatedBooks() {
  const featuredBooks = await this.aggregate([
    { $match: { rating: { $gte: 4 } } },
    { $addFields: { "featured": "popular" } },
    { $match: { rating: { $gte: 4.5 } } },
    { $addFields: { "featured": "bestseller" } },
  ]);
  console.log(featuredBooks)
  return featuredBooks
});


export const Book = model<IBook, BookModel>('Book', bookSchema)