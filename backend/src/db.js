import client from 'mongodb';

let db = client.connect(process.env.MONGODB_URI);

db.catch(error => {
  console.log(error);
  process.exit(1);
});

export default db;
