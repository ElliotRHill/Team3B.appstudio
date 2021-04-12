let listNames = ["new", "old"]

yourLists.onshow=function(){
    // clear list and load to rdo from listNames array
    rdoLists.clear()
    for (i = 0; i < listNames.length; i++)
        rdoLists.addItem(listNames[i])
}

btnDeleteList.onclick=function(){
    // gets selected list and deletes
    let sel = $("input[name=rdoLists]:checked").prop("value")
    listNames.splice(listNames.indexOf(sel), 1)
    
    // reload rdo
    rdoLists.clear()
    for (i = 0; i < listNames.length; i++)
        rdoLists.addItem(listNames[i])
}

btnAddList.onclick=function(){
    ChangeForm(newList)
}
