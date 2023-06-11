import express, { Request, Response } from 'express';
import cors from "cors";
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();
const PORT = process.env.PORT || 3333;
const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.get("/", function (req: Request, res: Response) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/video", function (req: Request, res: Response) {

})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))