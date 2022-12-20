import { Application } from "express";
import authRoute from './authRoute';
import adminRoute from './adminRoute';
import hanaRoute from './hanaRoute';
import { checkAdmin } from "../middewares/checkAdmin";
function route(app: Application){
    app.use('/api/auth',  authRoute);
    app.use('/api/admin',checkAdmin,  adminRoute);
    app.use('/',  hanaRoute);
    
}
 
export default route;