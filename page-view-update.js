

let ubId = function(elmId, text){
  // let idText = elmId;
 //  let inText = text;
let targetElm = document.getElementById(elmId);
targetElm.innerText = text;
}
let pgvwUBI = {
 addTitle: function(){ ubId("pgName", document.title);  }
   
}

/* other */
window.onload = function() {
//document.getElementsByTagName("html")[0].style = "background-color:  rgb(34, 34, 34)";
pgvwUBI.addTitle();
document.getElementById("stopButton").disabled = true;



}
