const express = require('express');
const path = require('path');
const app = express();
const db = require('./db/db')
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('views', path.join(__dirname, 'views'));
// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file

// index page
app.get('/', async (req,res)=>{
    try {
        const parts = await getAllParts();
        const models = await getAllModels();
        res.render('index',{
            parts,
            models
        })
// here you can do something with the three results
    } catch (error) {
        console.log(error)
    }
});
app.post('/insert', function(req, res){
    const {name,price,car_models_id} = req.body
    db.query('INSERT INTO auto_parts values(null,?,?,?)',[name,price,car_models_id],(err,elem)=>{
        res.redirect('/')
    });
});

app.post('/update', function(req, res){
    const {name,price,car_models_id, id} = req.body
    db.query('UPDATE auto_parts SET name=?,price=?,car_models_id=? WHERE id=?',[name,price,car_models_id, id],(err,elem)=>{
        res.redirect('/')
    });
});
app.post('/delete', function(req, res){
    const {id} = req.body
    db.query('DELETE FROM auto_parts WHERE id=? ',  [id],(err,elem)=>{
        res.redirect('/')
    });
});
// about page
// app.get('/about', function(req, res) {
//     res.render('pages/about');
// });

app.listen(8080);
console.log('Server is listening on port 8080');

getAllParts = () =>{
    return new Promise((resolve, reject)=>{
        db.query('SELECT * FROM auto_parts ',  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};

getAllModels = () =>{
    return new Promise((resolve, reject)=>{
        db.query('SELECT * FROM car_models ',  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};
insertParts = () =>{
    return new Promise((resolve, reject)=>{
        db.query('SELECT * FROM car_models ',  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};
updateParts = (name,price,car_models_id, id) =>{
    return new Promise((resolve, reject)=>{
        db.query('UPDATE auto_parts SET name=?,price=?,car_models_id=? WHERE id=?',[name,price,car_models_id, id],  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};
dellParts = (id) =>{
    return new Promise((resolve, reject)=>{
        db.query('DELETE FROM auto_parts WHERE id=? ',  [id],(error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};