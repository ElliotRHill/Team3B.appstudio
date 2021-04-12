//listNames.pop or push??
//allie
/*
newList.onshow=function(){
    drpLists.clear()   
  for (i = 0; i <= listNames.length - 1; i++)
      drpLists.addItem(listNames[i])
}

*/
//when they submit it will go to the end of the listNames array (maybe will change location later..) and then  label will show the addition.

btnSubmit.onclick=function(){
  listNames.push(inptAddItem.value)
  lblShowList.textContent = listNames
}
