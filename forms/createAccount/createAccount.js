btnCreateAcc.onclick = function() {
  query = "SELECT username FROM account;"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
  resultsUser = JSON.parse(req.responseText)

  let newUser = inptCreateUser.value

  if (req.status == 200) { //everything worked.
    for (i = 0; i < resultsUser.length; i++) {
      if (newUser == resultsUser[i]) {
        console.log('this user exists')
        checkUser = 1
        // userIndex = i
        lblUserWarning.hidden=false
        break
      } else {
        checkUser = 0
      }
      //ends loop to check username
    }
  } else {
    //Handle that. 
    console.log('failure user')
  }
  
  
  
}