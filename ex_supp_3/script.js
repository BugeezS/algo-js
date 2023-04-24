let retourvide = [];




// function computeChange(price, moneyHanded){
//     if((price < 0)||(moneyHanded < 0)){
//         return retourvide;
//     }else if (moneyHanded < price){
//         return retourvide;
//     }else{
//         const change = moneyHanded - price;
//         // const coin = [0.1,0.2,0.5,0.10,0.20,0.50,1,2];
//         // const banknote = [5,10,20,50,100,200,500];
//         // return change; 
//         function countChangeEuro(amount) {
//             const coins = [200, 100, 50, 20, 10, 5, 2, 1]; // available coin denominations in cents
//             let count = 0; // initialize count of coins used
//             let remainingAmount = amount * 100; // initialize remaining amount to change in cents
            
//             // loop through each coin denomination
//             for (let i = 0; i < coins.length; i++) {
//               const coin = coins[i];
              
//               // count how many coins of this denomination can be used
//               const numCoins = Math.floor(remainingAmount / coin);
//               count += numCoins; // add the count to the total
//               remainingAmount -= numCoins * coin; // subtract the used amount from the remaining amount
              
//               // if the remaining amount is zero, we have made exact change
//               if (remainingAmount === 0) {
//                 break;
//               }
//             }
            
//             return count;
//           }
//           countChangeEuro(change);
//     }
//   }

// function computeChange(price, moneyHanded){
//     if((price < 0)||(moneyHanded < 0)){
//         return []; // corrected: empty array returned instead of "retourvide"
//     }else if (moneyHanded < price){
//         return []; // corrected: empty array returned instead of "retourvide"
//     }else{
//         const change = moneyHanded - price;
//         function countChangeEuro(amount) {
//             const coins = [200, 100, 50, 20, 10, 5, 2, 1];
//             let count = 0;
//             let remainingAmount = amount * 100;
            
//             for (let i = 0; i < coins.length; i++) {
//               const coin = coins[i];
//               const numCoins = Math.floor(remainingAmount / coin);
//               count += numCoins;
//               remainingAmount -= numCoins * coin;
              
//               if (remainingAmount === 0) {
//                 break;
//               }
//             }
            
//             return count;
//           }
//           return countChangeEuro(change); // corrected: the function should return the result of countChangeEuro()
//     }
//   }

function computeChange(price, moneyHanded) {
    // Return empty array if price or moneyHanded are not positive numbers
    if (typeof price !== 'number' || typeof moneyHanded !== 'number' || price <= 0 || moneyHanded <= 0) {
      return [];
    }
    
    // Return empty array if money handed is lower than price
    if (moneyHanded < price) {
      return [];
    }
    
    const denominations = [
      { name: '500€', value: 50000 },
      { name: '200€', value: 20000 },
      { name: '100€', value: 10000 },
      { name: '50€', value: 5000 },
      { name: '20€', value: 2000 },
      { name: '10€', value: 1000 },
      { name: '5€', value: 500 },
      { name: '2€', value: 200 },
      { name: '1€', value: 100 },
      { name: '50 cent', value: 50 },
      { name: '20 cent', value: 20 },
      { name: '10 cent', value: 10 },
      { name: '5 cent', value: 5 },
      { name: '2 cent', value: 2 },
      { name: '1 cent', value: 1 }
    ];
  
    let change = moneyHanded - price;
    const result = [];
  
    denominations.forEach(denomination => {
      const count = Math.floor(change / denomination.value);
      if (count > 0) {
        result.push(...Array(count).fill(denomination.value));
        change -= count * denomination.value;
      }
    });
  
    return result.map(value => value / 100);
  }
  
console.log(computeChange(1, 50)); // outputs 2