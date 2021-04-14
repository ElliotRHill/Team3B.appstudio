let req = ""
let query = ""
let results = ""
let pw = 'Speedyrwb645'  // ***** put your database password here
let netID = 'rwb12128'
let databaseSchema = "375groupb3"  // put your netID here so this is your schema


btnLogin.onclick=function(){
    query = "SELECT DISTINCT state FROM customer ORDER BY state ASC;"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + courseSchema + "&query=" + query)
    if (req1.status == 200) { //everything worked.
        lblWelcome.style.display = "block"  // none to hide
        lblResult.style.display = "block"  // none to hide
        lblResult.value = "The authentication code is " + req1.responseText
        //1 good 0 bad
        
    } else {
        //Handle that. 
        lblResult.style.display = "block"  // none to hide
        lblResult.value = "Error Connection Not Made: " + req1.status + " readystate " + req1.readyState + " status text " + req1.statusText;
    }
}


//This is the login page