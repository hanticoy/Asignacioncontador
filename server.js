const express = require('express');
const app = express();
let session = require('express-session');

let wvarContador = 0;

app.use(session({secret: 'misecreto'}));  

app.set('view engine', 'ejs')

app.use(express.static(__dirname + 'public'));

app.set('views', __dirname + '/views')

app.get('/',  function (request,response){
    
    wvarContador++
    request.session.contar = wvarContador;

    response.render('index', {contador: wvarContador})
    }
);

app.listen(8000);

console.log('servidor iniciado en http://localhost:8000')