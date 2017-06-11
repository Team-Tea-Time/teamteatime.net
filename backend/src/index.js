import express from 'express';
import Promise from 'bluebird';
import mongoose from 'mongoose';
import busboy from 'express-busboy';
import logger from 'morgan';
import expressValidator from 'express-validator';

import './env';
import router from './router';
import handleCommand from './cli';

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', error => {
  throw new Error(`unable to connect to database: ${error}`);
});

let argv = process.argv.slice(2);
let app;

if (argv && argv[0] === 'cli') {
  handleCommand(argv.slice(1)).then(() => {
    process.exit(0);
  }).catch(() => {
    process.exit(1);
  });
} else {
  app = express();

  if (process.env.DEBUG == 'true') {
    app.use(logger('dev'));
  }

  busboy.extend(app, { upload: true });

  app.use(expressValidator({
    customValidators: {
      isArray: function(value) {
        return Array.isArray(value);
      },
      isEmpty: function(value) {
        return value == null;
      }
    }
  }));

  app.use('/api', router);

  let server = app.listen(process.env.PORT || 8090, () => {
    let port = server.address().port;
    console.log("Started on port", port);
  });
}

export default app;
