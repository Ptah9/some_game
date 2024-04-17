const mysql = require("mysql2");

let user = "ptah_10"
let now_level = "[[0,0,0,0,0,0,0,3,0,0],[3,1,1,1,0,0,1,1,1,0],[0,0,0,1,0,0,0,0,1,0],[0,1,0,1,1,1,1,1,1,0],[0,1,1,1,0,1,0,0,1,0],[0,1,0,1,0,0,0,0,1,0],[0,0,0,1,1,1,1,1,1,0],[0,1,0,1,0,1,0,0,1,2],[0,1,1,1,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0]]"
let now_x = 9
let now_y = 7

exports.init_user = async function (user_name){  
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "labsdb",
        password: "password"
        }).promise();
    

    let sql1 = `INSERT INTO users_info
                VALUES ("${user_name}");`;
    let sql2 = `INSERT INTO users_this_life (tg_user_name, HP, weapon, magic, ring, shield, score, kills) 
                VALUES ("${user_name}", 100, 0, 0, 0, 0, 0, 0);`;
    let sql3 = `INSERT INTO users_this_level (tg_user_name, now_level, now_x, now_y) 
                VALUES ("${user_name}", "${now_level}", ${now_x}, ${now_y});`;
    connection.query(sql1)
            .then(result =>{
                console.log(result[0]);
            })
            .catch(err =>{
                console.log(err);
            });
    connection.query(sql2)
            .then(result =>{
                console.log(result[0]);
            })
            .catch(err =>{
                console.log(err);
            });
    connection.query(sql3)
            .then(result =>{
                console.log(result[0]);
            })
            .catch(err =>{
                console.log(err);
            });

}

exports.update_data = async function (user_name, table, obj, value){
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "labsdb",
        password: "password"
        }).promise();
    
    const sql =`UPDATE
                    ${table}
                SET
                    ${obj} = "${value}"
                WHERE
                    tg_user_name = "${user_name}"`;
    
    connection.query(sql)
        .then(result =>{
        })
        .catch(err =>{
            console.log(err);
        });
}

exports.get_data = async function (table, user_name){
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "labsdb",
        password: "password"
        }).promise();

    const sql =`SELECT * FROM ${table} 
                WHERE tg_user_name = '${user_name}';`;

    // lol = await connection.query(sql);
    return connection.query(sql);
          
    
}


// get_data("users_this_life", "ptah_10")
// init_user("ptah_10")
// update_data("ptah_10", "users_this_life", "score", 1000);


