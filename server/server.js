const express = require('express');
const app = express();

const sequelize = require('./models').sequelize;
const bodyParser = require('body-parser');

sequelize.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

const {
    User,
    Store,
    Sequelize: {Op}
} = require('./models');
sequelize.query('SET NAMES utf8');
//회원 전체 정보 보기
app.get('/get/data', (req, res) => {
    User.findAll()
     .then( result => { res.send(result) })
     .catch( err => { throw err })
});
//회원정보 추가
app.post('/add/data', (req, res) => {
    console.log(req.body);

    User.create({
        userId : req.body.userId,
        userPw : req.body.userPw,
        userName : req.body.userName,
        userNumber : req.body.userNumber,
        userEmail : req.body.userEmail
    })
    .then( result => {
        res.send(result)
    })
    .catch( err => {
        console.log(err)
        throw err;
    })
});
//두가지 정보를 입력해서 골라서 정보보기
app.post('/get/multiKeywordData', (req, res) => {
    User.findAll({
        where: { [Op.or]: [
            { userId : req.body.userId }, { userPw : req.body.userPw }] }
    })
    .then( result => { res.send(result) })
    .catch( err => { throw err })
})
//가게 정보 추가
app.post('/add/store', (req, res) => {
    console.log(req.body);

    Store.create({
        image : req.body.image,
        name : req.body.name,
        address : req.body.address,
        number : req.body.number,
        time : req.body.time,
        sit : req.body.sit,
    })
    .then( result => {
        res.send(result)
    })
    .catch( err => {
        console.log(err)
        throw err;
    })
});
app.get('/get/store', (req, res) => {
    Store.findAll()
     .then( result => { res.send(result) })
     .catch( err => { throw err })
});
app.get('/get/viewstore',(req,res) => {
    Store.findOne({
        where: { storeid : req.body.storeid }
    })
    .then( result => { res.send(result) })
    .catch( err => { throw err })
});

app.post('/get/keywordSingleData', (req, res) => {
    Store.findOne({
        where: { name : req.body.name }
    })
    .then( result => { res.send(result) })
    .catch( err => { throw err })
})

app.use('/image', express.static('./upload'));


const PORT = process.env.PORT || 4003;
app.listen(PORT, () =>{
    console.log(`Server On : http://localhost:${PORT}/`);
})