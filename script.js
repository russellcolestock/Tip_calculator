let tenPercentButton = document.getElementById("ten-percent-btn")

let totalBill = document.getElementById("total-bill")

let tipEl = document.getElementById("tip-el")



function tenPercent() {
  let result =  totalBill.valueAsNumber * .1
  tipEl.textContent = "Tip Amount:  $" + result
}

function fifteenPercent() {
  let result =  totalBill.valueAsNumber * .15
  tipEl.textContent = "Tip Amount:  $" + result
}

function twentyPercent() {
  let result =  totalBill.valueAsNumber * .2
  tipEl.textContent = "Tip Amount:  $" + result
}