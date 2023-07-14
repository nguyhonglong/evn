import express from 'express';
import path from 'path'
import { engine } from 'express-handlebars';
import morgan from "morgan";
import mongoose from 'mongoose';
import route from './routes/index.js';
const uri = "mongodb+srv://nguyhonglong2002:Mb5AkIZdMCRUgJYi@cluster0.zokt7pa.mongodb.net/evn?retryWrites=true&w=majority";


const app = express();
const port = 3000;

mongoose.connect(uri);
console.log(mongoose.connection.readyState)

route(app);

app.use(express.static('../server/src/public'))

app.use(morgan('combined'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views','./src/views');




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});