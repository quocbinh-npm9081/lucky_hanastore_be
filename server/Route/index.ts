import { Application } from "express";
import authRoute from './authRoute';
import { validationLogin } from "../middewares/validations";
function route(app: Application){
    app.use('/api/auth',validationLogin,  authRoute);
}

export default route;