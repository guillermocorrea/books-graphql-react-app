import { Book } from './../models/Book';
import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class BooksController {
  index = async (_: Request, res: Response) => {
    const books = await Book.find({}).lean();
    res.render('books/index', { title: 'Books', books });
  };

  renderAddBookForm = (_: Request, res: Response) => {
    res.render('books/add', { title: 'Add a Book' });
  };

  saveBook = async (req: Request, res: Response) => {
    const { title, author, isbn } = req.body;
    const book = Book.build({ title, author, isbn });
    await book.save();
    res.redirect('/books');
  };
}
