//expandable box//
function openTab(tabName) {
    x = document.getElementsByClassName("containerTab");
    document.getElementById(tabName).style.display = "block";
  }

  //modal//
  
  //Get the modal
  var modal = document.getElementById("myModal");
  ​
  //Get the button that opens the modal
 var btn = document.getElementById("myBtn");
  ​
  //Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  ​
  //When the user clicks the button, open the modal 
 $("#myBtn").click(function() {
   modal.style.display = "block";
  })
  ​
  //When the user clicks on <span> (x), close the modal
  $("span").click(function() {
  modal.style.display = "none";
 })
  ​
  //When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
  }
 
  localStorage.setItem('storeObj', JSON.stringify(modal));