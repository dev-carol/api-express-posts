const express = require('express');
const { PostsRouter } = require('./src/app/posts/posts.controller');
const { UsersRouter } = require('./src/app/users/users.controller');

const app = express();

app.use(express.json())

app.get('/',(req, res) => res.status(200).json({message: 'Api is okay!'}));

app.use('/api', UsersRouter, PostsRouter);


app.listen(3333, () => {
    console.log('Server is running...');
})