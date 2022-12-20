import { Router } from "express";
import adminControllers from "../controllers/adminControllers";
const route = Router();
route.get('/users', adminControllers.users );
route.post('/createProduct', adminControllers.createProduct );
export default route;