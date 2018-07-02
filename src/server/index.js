import express from 'express';

const app = express();

app.use(express.static('dist'));
app.get('/api/heartbeat', (req, res) => res.send({ success: true }));
app.listen(8080, () => console.log('Listening on port 8080!'));