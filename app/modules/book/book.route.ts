import express from 'express'
import { createBook, getByGenre } from './book.controller';

const router = express.Router();

router.post('/create-book', createBook)
router.get('/genre', getByGenre)

export default router;