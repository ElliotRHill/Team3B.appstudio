//listNames.pop or push??



newList.onshow=function(){
    query = "SELECT list_name FROM lists"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + schema + "&query=" + query)

    if (req.status == 200) { 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           console.log("There are no states in the database.")
        else {
            drpLists.clear()
            for (i = 0; i < results.length; i++)
                drpLists.addItem(results[i])
        }
    } else
        console.log(`Error code: ${req.status}`)
}

drpLists.onclick=function(s){
    if (typeof(s) == "object")   
      return                    
    else {  
        drpLists.value = s
        
        query = "SELECT name FROM customer WHERE `state` = '" + s + "'"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

        if (req.status == 200) { 
            results = JSON.parse(req.responseText)
            if (results.length == 0)
                lblEmp.textContent = "There are no names in the database."
            else {        
                let message = ""
                for (i = 0; i < results.length; i++)
                    message = message + results[i][0] + "\n"
                lblEmp.textContent = message
            }
        } else
            lblEmp.textContent = "Error code: " + req.status
    }
}


btnSubmit.onclick=function(){
  listNames.push(inptAddItem.value)
  lblShowList.textContent = listNames
}
