//expandable box//
function openTab(tabName) {
    x = document.getElementsByClassName("containerTab");
    document.getElementById(tabName).style.display = "block";
  }


  localStorage.setItem('storeObj', JSON.stringify(modal));