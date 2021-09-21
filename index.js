const btnCheck = document.querySelector("#btn-check");
const result = document.querySelector("#result");
result.style.display = "none";

btnCheck.addEventListener("click", function onClick() {
    const luckyNumber = document.querySelector("#lucky-number");
    const birthday = document.querySelector("#birth-date");

    var birthdaySum = 0;
    const birthdayValue = (birthday.value.replaceAll("-", ""));

    if (luckyNumber.value === "" || birthday.value === "") {
        result.style.display = "block"
        result.innerText = "You have not provided the required Information."
    } else {
        if (Number(luckyNumber.value) === 0 || Number(luckyNumber.value) > 10) {
            result.style.display = "block"
            result.innerText = "Lucky Number must be greater than 0 and less then 10."
        } else {
            for (i = 0; i < 8; i++) {

                birthdaySum = birthdaySum + (Number(birthdayValue.slice(i, (i + 1))));
            };
            if (Math.trunc((birthdaySum % Number(luckyNumber.value)) === 0)) {
                result.style.display = "block"
                result.innerText = "Congratulations, Your Birthday is Lucky!"
                // console.log("Congratulations, Your Birthday is Lucky!");
            } else {
                result.style.display = "block"
                result.innerText = "Alas, Your Birthday is not Lucky."
                // console.log("Alas, Your Birthday is not Lucky.");
            }
        }
    }

});
