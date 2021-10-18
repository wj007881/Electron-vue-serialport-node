var express = require('express');
var router = express.Router();

var mysql = require('mysql')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var db = require('../db/sql.js')

router.post('/api/userInfo', function(req, res, next) {
    var username=req.body.username;//post专用
    var pwd=req.body.pwd;
    var ip=req.ip.match(/\d+\.\d+\.\d+\.\d+/).toString()
    console.log(username,pwd)
    res.send({name:username,pwd:pwd,ip:ip});//数据返回前端
});
router.get('/api/mysql', function(req, res, next) {
  db.connection()
  db.query("show databases;",function(error,results,fields){
     res.json(results)
   })
  db.close()
});

router.get('/api/server', function(req, res, next) {
  db.connection()
  db.query("show databases;",function(error,results,fields){
     res.json(results)
   })
  db.close()
});
router.get('/api/info', function(req, res, next) {
  res.json(
      [
        {
          name:"小明",
          age:20,
          address:'北京'
        },
        {
          name:"小敏",
          age:23,
          address:'上海'
        }
      ]
    );
});

module.exports = router;
