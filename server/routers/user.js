import express from 'express';
import User from '../controller/user';
import validate from '../midleware/validation'
import user from '../models/user';

const router = express.Router();
router.post('/signup',validate.uservalidation, User.create);
router.post('/login', User.login)

export default router;