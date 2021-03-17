var express = require('express');
var router = express.Router();
// tutoriel : https://zellwk.com/blog/crud-express-mongodb/
const MongoClient = require('mongodb').MongoClient
db = null
MongoClient.connect('mongodb+srv://thomas:carros@cluster0.hk9ac.mongodb.net/users?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    db = client.db('users')
  })
  .catch(error => console.error(error))

router.get('/add', (req, res, next) => {
    console.log("get add")
    console.log(req.query.nom)
    if(req.query != null ){
        db.collection('assignements').insert({
            nom: req.query.nom,
            titre: req.query.titre,
            dateDeRendu: req.query.dateDeRendu,
            rendu: req.query.rendu,
            auteur: req.query.auteur,
            remarque: req.query.remarque,
            noter: req.query.noter,
            detail: req.query.detail,
            note: req.query.note,
            
        });
        res.status(200).send("oui");
    } else {
        res.status(200).send("non");
    }
})

router.get('/delete', (req, res, next) => {
    console.log("get delete")
    if(req.query != null ){
        const result = db.collection('assignements').deleteOne({
            nom: req.query.nom,
            titre: req.query.titre,
            auteur: req.query.auteur
        });
        res.status(200).send("oui");         
    } else {
        res.status(200).send("non");
    }
})

router.get('/update', (req, res, next) => {
    console.log("get update")
    console.log(req.query)
    if(req.query != null ){
        db.collection('assignements').findOneAndUpdate({
            nom: req.query.nom,
            titre: req.query.titre,
            auteur: req.query.auteur,
        },
        {
            $set: {
                nom: req.query.nom,
                titre: req.query.titre,
                dateDeRendu: req.query.dateDeRendu,
                rendu: req.query.rendu,
                auteur: req.query.auteur,
                remarque: req.query.remarque,
                noter: req.query.noter,
                detail: req.query.detail,
                note: req.query.note
            },
        });
          res.status(200).send("oui");       
    } else {
        res.status(200).send("non");
    }
})

router.post('/', (req, res, next) => {
    console.log("post")
    const cursor = db.collection('assignements').find().toArray().then(results => {
        res.status(201).json(results);
    });
  });
module.exports = router;
