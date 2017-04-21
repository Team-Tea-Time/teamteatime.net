import express from 'express';
import bodyParser from 'body-parser';

import './env';
import router from './router';

let app = express();

app.use(bodyParser.json());
app.use('/api', router);

let server = app.listen(process.env.PORT || 8080, () => {
  let port = server.address().port;
  console.log("Started on port", port);
});

export default app;
