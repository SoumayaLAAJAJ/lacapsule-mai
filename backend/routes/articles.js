var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.get('/', (req, res) => {
    fetch('https://bikeshop-articles.vercel.app/articles')
        .then(response => response.json())
        .then(data => {
            console.log(data.articles[1].name); // Vérifiez les données récupérées dans la console
            res.json({ articles : data.articles });
        })
        .catch(error => {
            console.log(error); // Affichez les éventuelles erreurs dans la console
            res.status(500).json({ error: 'Internal Server Error' });
        });
});


module.exports = router;



