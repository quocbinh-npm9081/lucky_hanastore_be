import dotenv from 'dotenv';
dotenv.config();
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import DB from './config/mongodb';
import route from './Route';
import cloudinaryV2 from './config/cloudinary ';
// BOOT EXPRESS
const app: Application = express();
const port = 5000;
//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
// APPLICATION ROUTING

route(app);
//CONNECT DB
DB.connect();
// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));