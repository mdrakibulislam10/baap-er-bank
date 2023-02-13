// step 1: add event handler with addEventListener to the deposit btn
document.getElementById("btn-deposit").addEventListener("click", function () {
    // step 2: get the deposit amount from the deposit input field
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step 3: get the current deposit total amount
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)

    // step 4: addition numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step 5: get ballance current total
    const ballanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = ballanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6: calculate current total value
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    ballanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = "";
});