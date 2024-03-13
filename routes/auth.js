import express from 'express';
import AuthController from '../controllers/AuthController.js';

const router = express.Router();

router.post('/register', AuthController.register);

export default router;