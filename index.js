const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

const cors = require('cors');
app.use(cors());

const categories = require('./data/category.json');
const news = require('./data/news.json');

app.get('/', (req, res) =>{
    res.send('testing the server for the second time');
})

app.get('/news-categories', (req, res) =>{
    res.send(categories)
})

app.get('/categories/:id', (req, res) =>{
    const id = req.params.id;
    const newsCategories = news.filter(n => n.category_id === id);
    res.send(newsCategories)
})

app.get('/news/:id', (req, res) =>{
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews)
})


app.listen(port, () =>{
    console.log('running the server')
})