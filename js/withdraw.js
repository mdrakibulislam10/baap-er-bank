// step 1. add event handler with the withdraw btn
document.getElementById("btn-withdraw").addEventListener("click", function () {
    // step 2. get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById("withdraw-field");
    const withdrawAmountString = withdrawField.value;
    // if we get string type number then, we need to parse the number
    const newWithdrawAmount = parseFloat(withdrawAmountString);

    // clear the input field
    withdrawField.value = "";

    if (isNaN(newWithdrawAmount)) {
        alert("please provide number")
        return;
    }

    // step 3. get previous withdraw total
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    /* // step 4. calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal; */

    // step 5. get balance field amount
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert("Baap er bank e eto taka nai");
        return;
    };
    // step 4. calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step 6. update balance field amount
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    /*   // clear the input field
      withdrawField.value = ""; */
});
