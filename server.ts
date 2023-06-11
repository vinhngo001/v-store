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

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/video", function (req: Request, res: Response) {
    try {
        const range = req.headers.range;
        if(!range){
            res.status(400).send("Requires Range from header");
        }
        // get video stats about 61MB
        const videoPath = __dirname + "DJI_0053.mp4";
        const videoSize = fs.statSync(videoPath).size;
        console.log(videoSize);
        
    } catch (error) {
        console.log(error);
        throw error;
    }
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))