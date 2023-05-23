import express from 'express'
import { createBook, getBestSeller, getByGenre, getByGenreAndPublisher, makeInt } from './book.controller';

const router = express.Router();

router.post('/create-book', createBook)
router.get('/priceUpdate', makeInt)
router.get('/featured', getBestSeller)
router.get('/:genre', getByGenre)
router.get('/:genre/:publisher', getByGenreAndPublisher)

export default router;