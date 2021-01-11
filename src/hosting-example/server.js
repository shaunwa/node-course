import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Heroku!');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('App is listening on port ' + PORT);
});