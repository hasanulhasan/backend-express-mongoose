import express from 'express'
import { createBook, getByGenre, getByGenreAndPublisher, makeInt } from './book.controller';

const router = express.Router();

router.post('/create-book', createBook)
router.get('/filter/:genre', getByGenre)
router.get('/filter/:genre/:publisher', getByGenreAndPublisher)
router.get('/priceUpdate', makeInt)

export default router;