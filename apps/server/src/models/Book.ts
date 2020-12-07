import { model, Schema, Document, Model } from 'mongoose';

interface BookAttrs {
  title: string;
  author: string;
  isbn: string;
}

interface BookDocument extends Document, BookAttrs {}

interface BookModel extends Model<BookDocument> {
  build(attrs: BookAttrs): BookDocument;
}

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
});

BookSchema.statics.build = (attrs: BookAttrs) => new Book(attrs);

export const Book = model<BookDocument, BookModel>('Book', BookSchema);
