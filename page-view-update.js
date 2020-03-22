

let updateInnerTextById = function(elmId, text){
  let targetElm = document.getElementById(elmId);
  targetElm.innerText = text;
}

let dynamicPageUpdates = {
 addTitle: function(){ updateInnerTextById("pgName", document.title);  }
}

let modalSetup = function() {
    var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");
    var noButton = document.querySelector("#nobtn");
    var yesButton = document.querySelector("#yesbtn");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    noButton.addEventListener("click", toggleModal);
    yesButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);     
       
}

/* other */
window.onload = function() {

dynamicPageUpdates.addTitle();

document.getElementById("stopButton").disabled = true;
 modalSetup();

 var testInitTrigger = document.querySelector(".testInitTrigger");
 testInitTrigger.addEventListener("click", hzNoteTest);

}
