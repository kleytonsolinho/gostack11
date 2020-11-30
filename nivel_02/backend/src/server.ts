import express from 'express';

import routes from './routes'

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello GoStack11!' });
})

app.listen(3333, () => {
  console.log('🚀 Server start on port 3333!');
});
