let price = 19.5;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const checkCashRegister = (price, cash, cid) => {
  const UNIT_AMOUNT = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let totalCID = cid.reduce((sum, [, amount]) => sum + amount, 0);
  totalCID = Number(totalCID.toFixed(2));
  let changeToGive = Number((cash - price).toFixed(2));
  const changeArray = [];

  if (changeToGive > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (changeToGive === totalCID) {
    return { status: "CLOSED", change: cid };
  }

  const cidReversed = [...cid].reverse();

  for (let [unit, amount] of cidReversed) {
    const unitValue = UNIT_AMOUNT[unit];
    let unitTotal = 0;

    while (changeToGive >= unitValue && amount > 0) {
      changeToGive = Number((changeToGive - unitValue).toFixed(2));
      amount = Number((amount - unitValue).toFixed(2));
      unitTotal = Number((unitTotal + unitValue).toFixed(2));
    }

    if (unitTotal > 0) {
      changeArray.push([unit, unitTotal]);
    }
  }

  if (changeToGive > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };
};

// Function to format the change output
const formatChange = (change) => {
  return change.map(([unit, amount]) => `${unit}: $${amount.toFixed(2)}`).join(' ');
};

// Event listener for the purchase button
document.getElementById('purchase-btn').addEventListener('click', () => {
  const cashInput = document.getElementById('cash');
  const changeDue = document.getElementById('change-due');
  const cash = parseFloat(cashInput.value);

  if (isNaN(cash) || cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cash === price) {
    changeDue.textContent = "No change due - customer paid with exact cash";
    return;
  }

  const result = checkCashRegister(price, cash, JSON.parse(JSON.stringify(cid)));

  if (result.status === "INSUFFICIENT_FUNDS") {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
  } else if (result.status === "CLOSED") {
    changeDue.textContent = `Status: CLOSED ${formatChange(result.change)}`;
  } else {
    changeDue.textContent = `Status: ${result.status} ${formatChange(result.change)}`;
  }
});
