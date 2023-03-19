import express from 'express';
import cors from 'cors';
import { getChampions } from './champsAPI.mjs';

const app = express();
const port = 5000;

app.use(cors()); // enable CORS

app.get('/api/champions', async (req,res) => {
    const champions = await getChampions();
    res.send(champions);
});

app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
});