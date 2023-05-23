import express from 'express'
import { createBook, getByGenre, getByGenreAndPublisher } from './book.controller';

const router = express.Router();

router.post('/create-book', createBook)
router.get('/:genre', getByGenre)
router.get('/:genre/:publisher', getByGenreAndPublisher)

export default router;