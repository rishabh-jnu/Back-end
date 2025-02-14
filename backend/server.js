import express from 'express';

const app = express();

app.use(express.static('dist'));
// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });

//get 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
      {
        id: 1,
        joke: 'What do you call a very small valentine?',
      },
      {
        id: 2,
        joke: 'What did the dog say when he rubbed his tail on the sandpaper?',
      },
      {
        id: 3,
        joke: 'Why don’t sharks like to eat clowns?',
      },
      {
        id: 4,
        joke: 'What did the grape do when he got stepped on?',
      },
      {
        id: 5,
        joke: 'How did the frog burn his tongue?',
      },
    ];
    res.send(jokes);
    });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});