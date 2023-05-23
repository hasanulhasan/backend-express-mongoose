import express from 'express'
import { createBook } from './book.controller';

const router = express.Router();

router.post('/create-book', createBook)

export default router;