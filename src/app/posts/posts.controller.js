const {Router} = require('express');
const { postsService } = require('./posts.service');

const PostsRouter = Router()

PostsRouter.get('/v1/posts', async (req, res) => {
    const post = await postsService.findAll();

    return res.status(200).json({post});
});


PostsRouter.post('/v1/posts', async (req, res) => {
    const {body} = req;

    const post = await postsService.create(body);
     return res.status(201).json(post);
});


PostsRouter.get('/v1/posts/:id',async  (req, res) => {
    const {id} = req.params

    const post = await postsService.findOneById(id);

    return res.status(200).json(post);
});


PostsRouter.put('/v1/posts/:id',async  (req, res) => {
    const {id} = req.params;

    const {body} = req;
    
    const post = await postsService.update({
       ...post,
       updated_at: new Date(),
    });

    return res.status(200).json(post);
});


PostsRouter.delete('/v1/post/:id', async (req, res) => {
    const {id} = req.params;

    await postsService.deleteById(id);

    return res.status(204).send();
});

module.exports = {PostsRouter};