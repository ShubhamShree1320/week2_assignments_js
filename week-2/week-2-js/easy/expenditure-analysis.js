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
  const totalsByCategory = {};

  // Loop through each transaction
  for (let i = 0; i < transactions.length; i++) {
      const transaction = transactions[i];
      const category = transaction.category;

      if (!totalsByCategory[category]) {
          totalsByCategory[category] = 0;
      }

      totalsByCategory[category] += transaction.price;
  }

  const result = [];
  for (const category in totalsByCategory) {
      result.push({
          category: category,
          totalSpent: totalsByCategory[category],
      });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
