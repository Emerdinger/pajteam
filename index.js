const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const port = process.env.PORT || 3977;

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Connected");
});

app.use(cors());
app.use(express.json());

app.use('/v1/pajeros', require('./routes/pajeros'));

app.listen(port, () => {
    console.log("Corriendo el servidor en el puerto : " + port);
})