const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('testing the server')
})

app.listen(port, () =>{
    console.log('running the server on port', port);
})