import { Router } from 'express';
import authControllers from '../controllers/authControllers';
import { validation } from '../middewares/validations';
const router = Router();

router.get('/getAuth',  authControllers.getAuth);
router.post('/register',validation,  authControllers.register);
router.post('/login',validation,  authControllers.login);
router.get('/logout',  authControllers.logout);

export default router;