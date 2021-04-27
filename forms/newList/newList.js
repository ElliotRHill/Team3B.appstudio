
let listID = ""
let userID = 1

function reloadListItems(listName) {
    query = "SELECT product_name FROM list_items LEFT JOIN lists ON list_items.listID = lists.listID LEFT JOIN products ON list_items.product_id = products.product_id WHERE list_name = '" + listName + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + schema + "&query=" + query)

    if (req.status == 200) { 
        results = JSON.parse(req.responseText)
        if (results.length == 0)
            console.log("No results")
        else { 
            selShowList.clear()
            for (i = 0; i < results.length; i++)
                selShowList.addItem(results[i])
        }
    } else
        console.log(`Error code: ${req.status}`)    
}

function getListID(listName, userId) {
    query = "SELECT listID FROM lists WHERE list_name = '" + listName + "' AND user_id = '" + userId + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + schema + "&query=" + query)
    if (req.status == 200) { 
        results = JSON.parse(req.responseText)
        if (results.length == 0)
            console.log("No results")
        else { 
            listID = results[0]
        }
    } else
        console.log(`Error code: ${req.status}`) 
}


function getProductID(item) {
  query = "SELECT product_id FROM products WHERE product_name = '" + item + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + schema + "&query=" + query)
    if (req.status == 200) { 
        results = JSON.parse(req.responseText)
        if (results.length == 0)
            console.log("No results")
        else { 
            productID = results[0]
        }
    } else
        console.log(`Error code: ${req.status}`)     
}


newList.onshow=function(){
    hmbrPageNavNewList.hidden = false
    
    // populate list dropdown
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
    
    // reload list items 
    reloadListItems(drpLists.value)
    
    // get list ID
    getListID(drpLists.value, userID)
     
}


drpLists.onclick=function(s){
    if (typeof(s) == "object")   
      return                    
    else {  
        drpLists.value = s
        // reload list items
        reloadListItems(s)
       
        // get list ID
        getListID(s, userID)       
    }
}


btnSubmit.onclick=function(){
  let newItem = inptAddItem.value
  let productID = ""
  
  
  // get product ID
  getProductID(newItem)  
  
  // insert query
  query = "INSERT INTO list_items (`listID`,`product_id`) VALUES ('" + listID + "', '" + productID + "')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + schema + "&query=" + query)
    if (req.status == 200) { 
        if (req.responseText == 500) {    
            console.log("You have successfully added the product!")
            reloadListItems(drpLists.value)            
        } else
            console.log("There was a problem with adding the product to the database.")
    } else 
        console.log(`Error: ${req.status}`)
}


btnDelItems.onclick=function(){
  
}


btnClearList.onclick=function(){
  
}


hmbrPageNavNewList.onclick=function(s){
    if (typeof(s) == "object") {
       return
    } else {
       switch(s) {
        case "Home":
            ChangeForm(yourLists)
            break;
        case "View Lists":
            ChangeForm(newList)
            break;
        case "Create New List":
            ChangeForm(newList)
            break;            
        case "Nearby Stores":
            ChangeForm(googleAPI)
            break;
        case "Weather":
            ChangeForm(weather)
            break;
        case "Coupons":
            ChangeForm(coupons)
            break;
        }
    }    
}




