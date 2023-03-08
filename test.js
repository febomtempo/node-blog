const mongoose = require('mongoose');
const Post = require('./database/models/Post');
const dotenv = require('dotenv');

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

Post.find();

// Post.findById("5b309ceca84e99bbb6601904", (error, post) => {
//   console.log(error, post)
// })

// Post.findByIdAndUpdate("5b309b35bd7950bab178d912", {
//   title: 'My first blog post title lorem ipsum'
// }, (error, post) => {
//   console.log(error, post)
// })

// Post.findByIdAndRemove("5b309ceca84e99bbb6601904", (error) => {
//   console.log(error)
// })

// Post.create({
//   title: 'My first blog post',
//   description: 'First Blog post description',
//   content: 'First Lorem ipsum content.',
// });
