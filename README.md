# Cash Register Project - Coinz
## JavaScript Foundamentals - Cash Register - FCC

A JavaScript application that simulates a cash register, calculating change due and managing available cash in the drawer.

## Features

- Calculates exact change based on purchase price and cash received
- Manages cash drawer inventory
- Provides status updates:
  - INSUFFICIENT_FUNDS: When drawer has less than change due or exact change cannot be made
  - CLOSED: When drawer amount equals change due
  - OPEN: When drawer has sufficient funds and can provide change

## Technical Requirements

- HTML input element with id="cash"
- Display element with id="change-due"
- Button element with id="purchase-btn"

## Currency Units

| Currency | Amount |
|----------|---------|
| PENNY | $0.01 |
| NICKEL | $0.05 |
| DIME | $0.10 |
| QUARTER | $0.25 |
| ONE | $1 |
| FIVE | $5 |
| TEN | $10 |
| TWENTY | $20 |
| ONE HUNDRED | $100 |

## Usage Examples

1. Insufficient Cash:
   ```javascript
   price = 20;
   cash = 10;
   // Result: Alert "Customer does not have enough money to purchase the item"
   ```

2. Exact Change:
   ```javascript
   price = 11.95;
   cash = 11.95;
   // Result: "No change due - customer paid with exact cash"
   ```

3. Change Due:
   ```javascript
   price = 19.5;
   cash = 20;
   cid = [["PENNY", 1.01], ["NICKEL", 2.05], ...];
   // Result: "Status: OPEN QUARTER: $0.5"
   ```

## Error Conditions

- Insufficient customer funds: Alerts user when cash provided is less than price
- Insufficient drawer funds: Returns "INSUFFICIENT_FUNDS" when drawer cannot make exact change
- Drawer equals change: Returns "CLOSED" with remaining funds listed
- Sufficient funds: Returns "OPEN" with change breakdown in descending order

## Testing

The project includes comprehensive test cases covering:
- Input validation
- Change calculation
- Drawer status updates
- Edge cases
- Various denomination combinations

Run tests using the provided test runner (Ctrl + Enter).
