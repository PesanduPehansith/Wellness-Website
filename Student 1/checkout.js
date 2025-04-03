
const newtotal = localStorage.getItem("tot");


document.querySelector(".amount").textContent = newtotal;


function validateForm() {
    
    var telephoneInput = document.getElementById("telephone");

   
    if (telephoneInput.value.length < 10) {
        alert("Telephone Number should be 10 Digits");
        return false;
    }

    var cardNumberInput = document.getElementById("card-number");

    if (cardNumberInput.value.length < 16) {
        alert("Card number needs to be 16 digits");
        return false;
    }


    var cvvInput = document.getElementById("cvv");


    if (cvvInput.value.length < 3) {
        alert("Security code (CVV) must be 3 digits");
        return false;
    }
}
