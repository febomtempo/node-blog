const path = require('path');
const expressEdge = require('express-edge');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Post = require('./database/models/Post');

const app = new express();

dotenv.config({ path: '.env' });

async function connect() {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log('Connected to Database');
  } catch (err) {
    console.log(`Connection Error: ${err}`);
  }
}

connect();

app.use(express.static('public'));
app.use(expressEdge.engine);
app.set('views', `${__dirname}/views`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/posts/new', (req, res) => {
  res.render('create');
});

app.post('/posts/store', (req, res) => {
  Post.create(req.body);
  res.redirect('/');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/post', (req, res) => {
  res.render('post');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(4000, () => {
  console.log('App listening on port 4000');
});
