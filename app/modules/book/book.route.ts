import express from 'express'
import { createBook, getByGenre, getByGenreAndPublisher, getFeatured, makeInt } from './book.controller';

const router = express.Router();

router.post('/create-book', createBook)
router.get('/priceUpdate', makeInt)
router.get('/featured', getFeatured)
router.get('/:genre', getByGenre)
router.get('/:genre/:publisher', getByGenreAndPublisher)

export default router;