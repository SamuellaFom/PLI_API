import routerdogs from './routes/dog.routes';
import routerannounces from './routes/post.routes';
import routermatch from './routes/match.routes'
import routerlike from './routes/like.routes';
import routerInterest from './routes/interest.routes';

const cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

app.use(bodyParser.json({limit: '200mb'}))
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/', routerdogs);
app.use('/', routerannounces);
app.use('/', routermatch);
app.use('/', routerlike)
app.use('/', routerInterest)

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);
  console.log('Authentication service started on port 3000');
});