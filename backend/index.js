const MongoClient = require('mongodb').MongoClient;


MongoClient.connect("mongodb+srv://thor:thor2303@cluster0.x4jye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });