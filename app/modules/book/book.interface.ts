import { HydratedDocument, Model } from "mongoose";

export interface IBook {
  id: string,
  title: string,
  author: string[],
  genre: string,
  publicationYear: number,
  publisher: {
    name: string,
    location: string
  }
  reviews: [
    {
      user: string,
      comment: string
    }
  ],
  rating: number,
  price: string,
}

export interface IBookMethods {
  fullName(): string;
}

export interface BookModel extends Model<IBook, {}, IBookMethods> {
  getRatedBooks(): Promise<HydratedDocument<IBook, IBookMethods>>;
}