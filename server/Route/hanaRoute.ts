import { Router } from 'express';
import hanaController from '../controllers/hanaControllers';
const router = Router();

router.get('/',  hanaController.index);

export default router;