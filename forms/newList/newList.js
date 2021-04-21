
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
        
        query = "SELECT product_name FROM list_items LEFT JOIN lists ON list_items.listID = lists.listID LEFT JOIN products ON list_items.product_id = products.product_id WHERE list_name = '" + s + "'"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + schema + "&query=" + query)

        if (req.status == 200) { 
            results = JSON.parse(req.responseText)
            if (results.length == 0)
                lblShowList.textContent = ""
            else {        
                let products = ""
                for (i = 0; i < results.length; i++)
                    products = products + results[i][0] + "\n"
                    lstShowList.addItem(results[i])
                lblShowList.textContent = products // change this to list group
            }
        } else
            console.log(`Error code: ${req.status}`)
    }
}


btnSubmit.onclick=function(){
  listNames.push(inptAddItem.value)
  lblShowList.textContent = listNames
}
