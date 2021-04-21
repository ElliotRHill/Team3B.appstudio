let req = ""
let query = ""
let results = ""
let pw = 'Speedyrwb645'  // ***** put your database password here
let netID = 'rwb12128'
let databaseSchema = "375groupb3"  // put your netID here so this is your schema

btnLogin.onclick=function(){
    query = "SELECT username FROM account;"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
    resultsUser = JSON.parse(req.responseText)
    
    checkUser = ''
    
    let user = inptUser.value
    
      if (req.status == 200) { //everything worked.
        for (i = 0; i < resultsUser.length; i ++) {
          if (user == resultsUser[i]) {
            console.log('this user exists')
            checkUser = 1
            break
          } else {
            checkUser = 0
            console.log(checkUser)
          }
        //ends loop to check username
      }
    } else {
        //Handle that. 
        console.log('failure user')
    }
      
    query = "SELECT password FROM account;"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
    resultsPW = JSON.parse(req.responseText)
    
    checkPW = ''
    
    let pw = inptPassword.value
    
    if (req.status == 200) { //everything worked.
      for (i = 0; i < resultsPW.length; i ++) {
        if (pw == resultsPW[i]) {
          console.log('this pw exists')
          checkPW = 1
          break
        } else {
          checkPW = 0
          console.log(checkPW)
        }
        //ends loop to check password
      }        
    } else {
      //Handle that. 
      console.log('failure user')
    }
      
    if (checkUser && checkPW == 1) {
      console.log('user and pw are in db')
    }
}