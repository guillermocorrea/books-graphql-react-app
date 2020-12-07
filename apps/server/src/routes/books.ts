import { Router } from 'express';
import { BooksController } from '../controllers/books.controller';

const router = Router();

const booksController = new BooksController();

router.get('/', booksController.index);
router.get('/add', booksController.renderAddBookForm);
router.post('/add', booksController.saveBook);

export default router;
