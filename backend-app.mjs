import express from 'express';
import { nanoid } from "nanoid";
import cors from 'cors';

const app = express();

const inMemoryStorage = {};

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000']
}));

app.get('/list/:id', (request, response) => {
  const id = request.params.id;
  const list = inMemoryStorage[id];
  if (!list) {
    response.status(404).send('List not found')
  }
  response.json(list);
});

app.get('/list', (request, response) => {
  response.json(Object.values(inMemoryStorage));
});

app.post('/list', (request, response) => {
  const id = nanoid();
  inMemoryStorage[id] = {id, ...request.body};
  response.json(inMemoryStorage[id]);
});

const port = 3001;

app.listen(port, () => {
  console.log(`Listening ${port}...`);
});