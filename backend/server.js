// import init_user from './modules/init-user-sql.js';
// import get_data from './modules/get-data-sql.js';
// import update_data from './modules/update-data-sql.js';
// // const mysql = require("mysql2");

const os = require("os");
const http = require("http");
const sql_module = require("./modules/sql-module.js");
const bodyParser = require('body-parser');

// console.log(sql_module.get_data("users_this_life", "ptah_9"));
// console.log(sql_module.get_data("users_this_life", "ptah_10"));
const express = require("express");
     
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const urlencodedParser = express.urlencoded({extended: false});

// app.use(express.static("public"));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({

    extended: true,

}));

 

app.get("/users/:table/:user_name", function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true)
    // console.log(sql_module.get_data(req.params.table, req.params.user_name));
    prom = sql_module.get_data(req.params["table"], req.params["user_name"]);
    prom.then((result)=>{
        res.send(result[0])
    });
    // res.send(lol);
});










// получение одного пользователя по id
// app.get("/api/users/:id", function(req, res){
        
//     const id = req.params.id; // получаем id
//     // находим в массиве пользователя по id
//     const index = findUserIndexById(id);
//     // отправляем пользователя
//     if(index > -1){
//         res.send(users[index]);
//     }
//     else{
//         res.status(404).send("User not found");
//     }
// });



// получение отправленных данных
app.post("/users/new_user", function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true)
    
    if(!req.body) return res.sendStatus(400);
    
    const userName = req.body.name;
    sql_module.init_user(userName);
    res.send("ok")
});

//  // удаление пользователя по id
// app.delete("/api/users/:id", function(req, res){
        
//     const id = req.params.id;
//     const index = findUserIndexById(id);
//     if(index > -1){
//         // удаляем пользователя из массива по индексу
//         const user = users.splice(index, 1)[0];
//         res.send(user);
//     }
//     else{
//         res.status(404).send("User not found");
//     }
// });
// изменение пользователя
app.post("/users/new_level/:user_name", function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true)
    
    if(!req.body) return res.sendStatus(400);
    console.log(req.body.level)
    
    sql_module.update_data(req.params.user_name, "users_this_level", "now_level", req.body.level);
    res.send("ok")
});


app.post("/users/lol", urlencodedParser, function(req, res){
    console.log("lol")
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true)
    
    // if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    
    // sql_module.update_data(req.params.user_name, "users_this_life", "score", req.body.level);
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.send("ok");
});

    
app.listen(5000, function(){
    console.log("Сервер ожидает подключения...");
});