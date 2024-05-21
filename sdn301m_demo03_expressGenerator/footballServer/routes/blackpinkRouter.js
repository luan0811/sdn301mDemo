const express = require('express')
const bodyParser = require('body-parser')

const blackpinkRouter = express.Router()

blackpinkRouter.use(bodyParser.json());
blackpinkRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next()
    })
    .get((req, res, next) => {
        res.end('All member of blackpink is ')
    })

    .post((req, res) => {
        res.end('Black pink will add a new member with name: ' + req.body.name + ' and nation ' + req.body.nation)
    })
    .put((req, res) => {
        res.statusCode = 400
        res.end('Not support')
    })
    .delete((req, res) => {
        res.statusCode = 400
        res.end('Blackpink giai tan')
    })
blackpinkRouter.route('/blackpinkId')
    .get((req, res, next) => {
        res.end('This is information of ' + req.params.blackpinkId)
    })
    .post((req, res) => {
        res.end('')
    })
    .put((req, res, next) => {
        res.write('Update the id ' + req.params.blackpinkId + '\n')
        res.end('will update the name ' + req.body.name + ' with des: ' + req.body.des)
        res.end('Not support')
    })

module.exports = blackpinkRouter