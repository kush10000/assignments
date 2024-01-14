/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length == 0)
  return [];
  let t = [{
    category: transactions[0].category,
    totalSpent: transactions[0].price,
  }];
  for(let i=1;i<transactions.length;i++){
    let temp = 0;
    for(let j=0;j<t.length;j++){
      if(t[j].category == transactions[i].category){
        t[j].totalSpent += transactions[i].price;
        temp = 1;
      }
    }
    if(temp == 0){
      t.push({
        category: transactions[i].category,
        totalSpent: transactions[i].price,
      });
    }
  }
  return t;
}

module.exports = calculateTotalSpentByCategory;
