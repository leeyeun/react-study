const express = require('express');
const app = express();

const sequelize = require('./models').sequelize;
const bodyParser = require('body-parser');

sequelize.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

const {
    Sample1,
    Sequelize: {Op}
} = require('./models');
sequelize.query('SET NAMES utf8');

app.get('/get/data', (req, res) => {
    Sample1.findAll()
     .then( result => { res.send(result) })
     .catch( err => { throw err })
});
// app.post('/get/keywordData', (req, res) => {
//     Sample1.findAll({
//         where: { name : req.body.name }
//     })
//     .then( result => { res.send(result) })
//     .catch( err => { throw err })
// });
app.post('/get/multiKeywordData', (req, res) => {
    Sample1.findAll({
        where: { [Op.or]: [{ name : req.body.name }, { email : req.body.email }] }
    })
    .then( result => { res.send(result) })
    .catch( err => { throw err })
})

const PORT = process.env.PORT || 4003;
app.listen(PORT, () =>{
    console.log(`Server On : http://localhost:${PORT}/`);
})