var express = require('express');
var router = express.Router();
// tutoriel : https://zellwk.com/blog/crud-express-mongodb/
const MongoClient = require('mongodb').MongoClient
db = null
MongoClient.connect('mongodb+srv://thomas:carros@cluster0.hk9ac.mongodb.net/users?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    db = client.db('users')
  })
  .catch(error => console.error(error))

/* GET users listing. */
router.get('/', (req, res, next) => {
  connection = false
  console.log(req.query)
  if(req.query != null & req.query.login != null & req.query.password != null){
      const cursor = db.collection('users').find().toArray().then(results => {
          results.forEach(element => {
              if(element.login == req.query.login){
                  if(element.password == req.query.password){
                      connection = true
                  }
              } 
          });
          if(connection){
              return res.send("oui")
          } else {
              return res.send("non")
          }
      }).catch(error => console.error(error))
  }
})
module.exports = router;
