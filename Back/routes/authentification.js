var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  connection = false
  console.log(req.query)
  if(req.query != null & req.query.login != null & req.query.password != null){
      const cursor = db.collection('users').find().toArray().then(results => {
          //console.log(results)
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
