const btnCheck = document.querySelector("#btn-check");
const result = document.querySelector("#result");
result.style.display = "none";

btnCheck.addEventListener("click", () => {
    const luckyNumber = document.querySelector("#lucky-number");
    const birthday = document.querySelector("#birth-date");
    var birthdaySum = 0;
    const birthdayValue = (birthday.value.replaceAll("-", "")).split("");
    birthdayValue.forEach(element => {
        birthdaySum+=element
    });

    result.innerText = (luckyNumber.value === "" || birthday.value === "") ? "You have not provided the required Information." : (Number(luckyNumber.value) === 0 || Number(luckyNumber.value) > 10) ? "Lucky Number must be greater than 0 and less then 10." : (Math.trunc((birthdaySum % Number(luckyNumber.value)) === 0)) ? "Congratulations, Your Birthday is Lucky!" : "Alas, Your Birthday is not Lucky.";
    
    result.style.display = (luckyNumber.value === "" || birthday.value === "") ? "block" : (Number(luckyNumber.value) === 0 || Number(luckyNumber.value) > 10) ? "block" : (Math.trunc((birthdaySum % Number(luckyNumber.value)) === 0)) ? "block" : "block";


});
