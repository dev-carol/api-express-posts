const {Router} = require('express');
const { usersService } = require('./users.service');

const UsersRouter = Router()

UsersRouter.get('/v1/users', async (req, res) => {
    const users = await usersService.findAll();

    return res.status(200).json({users});
});


UsersRouter.post('/v1/users', async (req, res) => {
    const {body} = req;

    const user = await usersService.create(body);
     return res.status(201).json(user);
});


UsersRouter.get('/v1/users/:id',async  (req, res) => {
    const {id} = req.params

    const user = await usersService.findOneById(id);

    return res.status(200).json(user);
});


UsersRouter.put('/v1/users/:id',async  (req, res) => {
    const {id} = req.params;

    const {body} = req

    const user = await usersService.update(id, body);

    return res.status(200).json(user);
});


UsersRouter.delete('/v1/users/:id', async (req, res) => {
    const {id} = req.params;

    await usersService.deleteById(id);

    return res.status(204).send();
});

module.exports = {UsersRouter};