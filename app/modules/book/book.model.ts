import { Schema, model } from "mongoose";
import { BookModel, IBook, IBookMethods} from "./book.interface";

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
  const ratingsBooks = await this.find({ rating: {$gte: 4} });
  console.log(ratingsBooks)
  return ratingsBooks
});


export const Book = model<IBook, BookModel>('Book', bookSchema)