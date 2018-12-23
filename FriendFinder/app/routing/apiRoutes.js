var mysql = require("mysql")

var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
     var connection = mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: "root",
        password: "root",
        database: "finder_db"
    });
}

connection.connect(function(err) {
if (err) {
  console.error("error connecting: " + err.stack);
  //once successfully connected, you may want to query your database for the info you'll need later!
}
});

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        connection.query ("SELECT * FROM profiles", function (err, response) {
            if (err) {
            console.log(err);
            
            }
            res.json(response)
        })
    
    })

    app.post("/api/friends", function(req, res){
        var friendsList;
        connection.query ("SELECT * FROM profiles", function (err, response) {
            if (err) {
            console.log(err);
            
            }
           friendsList=response
        })
        var newFriend= req.body
        var bestMatch;
        var bestScore=100

    //    loop through the freinds list 
    // compare each score to current friends score
    // take total difference and compare to current best score
    // if less then current best score then this profile becomes best match
        // add new profile to the db, responds with the best match 
        // create a new friend in postman to test it
        // add to code to add new friends to db and work logic

        res.json(friendsList)
    })

}

