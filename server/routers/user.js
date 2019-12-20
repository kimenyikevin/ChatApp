import express from 'express';
import User from '../controller/user';
import validate from '../midleware/validation'
import auth from '../midleware/auth';

const router = express.Router();
router.post('/signup',validate.uservalidation, User.create);
router.post('/login', User.login);
router.get('/getall', auth.verifyToken, User.getAll);
router.get('/getall/:id', auth.verifyToken, User.getOne);
router.post('/messages', auth.verifyToken, User.message);
router.get('/messages/:receiver_id', auth.verifyToken, User.getOneMessage )

export default router;