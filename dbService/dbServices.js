var dbConnection = require('./Connection')

var addWebsiteToDB = function(hostName,category,probability){
    var con = dbConnection.createConnection();
    const site =    {host_name: hostName,
                    category:category,
                    probability:probability};
    con.query('INSERT IGNORE INTO websites SET ?', site, (err, res) => {
        if(err) {throw err;}
        else{console.log(`The website:"${hostName}" is in the DB.`);}
    });
    dbConnection.closeConnection(con);
}    

var removeWebSiteFromDB = function(hostName){
    var con = dbConnection.createConnection();
    con.query(
        'DELETE FROM websites WHERE host_name = ?', hostName, (err, res) => {
            if (err){throw err;}
            else{console.log(`The website: "${hostName}" is not in the DB anymore.`);}
        }
    );
    dbConnection.closeConnection(con);
}

var addWordToDB = function(label,category){
    var con = dbConnection.createConnection();
    const word ={word: label,
                 category: category
                };
    con.query('INSERT IGNORE INTO words SET ?', word, (err, res) => {
        if(err){throw err;}
        else{console.log(`The word:"${label}" is in the DB.`);}
    });
    dbConnection.closeConnection(con);
}

var removeWordFromDB = function(word){
    var con = dbConnection.createConnection();
    con.query(
        'DELETE FROM words WHERE word = ?', word, (err, res) => {
            if (err) throw err;
            console.log(`The word:"${word}" is not in the DB anymore.`);
        }
    );
    dbConnection.closeConnection(con);
}



var getSiteFromDB = async function(website){

    let subFunction = (con, website) =>{
        return new Promise((resolve, reject) => {
            con.query(
              "SELECT * FROM websites WHERE host_name LIKE ?", website, (err,res) => {
                return err ? reject(err) : resolve(res);
              }
            );
        });
    }

    let result;
    var con = dbConnection.createConnection();
    result = await subFunction(con, website);
    dbConnection.closeConnection(con);
    return result;

}

module.exports ={
    addWebsiteToDB,
    removeWebSiteFromDB,
    addWordToDB,
    removeWordFromDB,
    getSiteFromDB
};
