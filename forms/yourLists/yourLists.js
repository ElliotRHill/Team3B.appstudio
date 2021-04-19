let req = {}
let query = ""
let results = []
let pw = "BiA375.ekh"  
let netID = "ekh74960"

yourLists.onshow=function(){        
  query = "SELECT list_name FROM lists"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

  if (req.status == 200) { 
    results = JSON.parse(req.responseText)
    if (results.length == 0)    
       console.log("There are no customers in the database.")
   else { 
       rdoLists.clear()
       for (i = 0; i < results.length; i++)
           rdoLists.addItem(listNames[i])
    }

} else
    console.log(`Error code: ${req.status}`)   
}

btnDeleteList.onclick=function(){
    let customerDelete = $("input[name=rdoLists]:checked").prop("value")
    query = "DELETE FROM lists WHERE list_name = '" + customerDelete + "'"      
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    
      if (req.status == 200) {
            if (req.responseText == 500) {    
                console.log(`You have successfully deleted the customer named ${customerDelete}`)
                
                query = "SELECT list_name FROM lists"
                req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

                if (req.status == 200) { 
                    results = JSON.parse(req.responseText)
                    if (results.length == 0)    
                       console.log("There are no customers in the database.")
                    else { 
                       rdoLists.clear()
                       for (i = 0; i < results.length; i++)
                           rdoLists.addItem(listNames[i])
                    }
                } else
                    console.log(`Error code: ${req.status}`)
                
            } else
                console.log(`There was a problem deleting ${customerDelete} from the database.`)
      } else
            console.log(`Error: ${req.status}`)
}

btnAddList.onclick=function(){
    ChangeForm(newList)
}
