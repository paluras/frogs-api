const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: "*",
}))

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/api/preview', require('./routes/api/preview.js'));

app.use('/api/frogs', require('./routes/api/frogs.js'));

app.get('/', (req, res) => {
  res.send('Api is running.')
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running."))
