const express = require('express');
const app = express();

let session = require('express-session');
let wvarContador = 0;

app.use(express.static(__dirname + '/public'));
app.use(session({secret: 'misecreto'}));  
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/',  function (request,response){
    
    let myrecarga = request.query.recarga;
    let myreinicio = request.query.reinicio;
 

    if (!isNaN(myrecarga)){ wvarContador = wvarContador + 2}

    if (!isNaN(myreinicio)){ wvarContador = 1}

    if (isNaN(myrecarga) & isNaN(myreinicio)){ wvarContador++}
    
    response.render('index', {contador:  wvarContador})
}
);

app.listen(8000);

console.log('servidor iniciado en http://localhost:8000')