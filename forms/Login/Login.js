let req = ""
let query = ""
let results = ""
let pw = 'Speedyrwb645'  // ***** put your database password here
let netID = 'rwb12128'
let databaseSchema = "375groupb3"  // put your netID here so this is your schema

btnLogin.onclick=function(){
    query = "SELECT * FROM account;"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
    results = JSON.parse(req.responseText)
    
    let user = inptUser.value
    //console.log(results[0])
    
    if (req.status == 200) { //everything worked.
        for (i = 0; i < results[0].length; i ++) {
          if (user == results[0][i]) {
            console.log('this user exists')
            break
          } else {
            console.log('this user does not exists')
          }
        }
        //console.log('success')
        //console.log(results)
    } else {
        //Handle that. 
        console.log('failure')
    }
}

//This is the login page