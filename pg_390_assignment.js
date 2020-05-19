function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function validateForm() {
    var x = document.forms["myForm" + "inputEmail" + "inputTelephone" + "inputAddress" + "inputAddress2" + "inputCity" + "inputState" + "inputZip" + "gridCheck"].value;
    if (x == "") {
      alert("Please fill everything out in the form.");
      return false;
    }
}
