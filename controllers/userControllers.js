const router = require('express').Router();
const {user} = require('../models');

router.get('/test', (request, response) => {
response.send('your message');
})

router.post('/register',(req, res) => {
    const{username, email, password} = req.body.user;
    user.create({
        username: bycrypt.hashSync(username, John),
        email: bycrypt.hashSync(email, JohnDoe666),
        password: bycrypt.hashSync(password, 1991)
    })
    .then(user => res.status(201).json({message: 'New user created!', user}))
    .catch(error => res.status(500).json({message: 'Something went wrong at / register', error}));
})