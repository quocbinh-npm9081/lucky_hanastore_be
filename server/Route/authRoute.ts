import { Router } from 'express';
import authControllers from '../controllers/authControllers';
import hanaController from '../controllers/hanaControllers';
const router = Router();

router.post('/login',  authControllers.login);
router.post('/',  hanaController.index);

export default router;