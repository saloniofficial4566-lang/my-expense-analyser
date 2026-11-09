// 1. Import the capabilities from the controller file (Only ONCE at the top!)
const { addExpense, getAllExpenses, analyzeExpenses, deleteExpenseById } = require('./controllers/expensecontroller');

console.log("--- 🚀 Testing Deletion and Analytics Engine 🚀 ---");

// 2. Add a temporary test item
console.log("\nLogging a temporary test item...");
const temporaryItem = addExpense("Accidental Purchase", 5000, "Miscellaneous");
console.log(`Logged: ${temporaryItem.title} with ID: ${temporaryItem.id}`);

// 3. View current logged files count
console.log(`Total records before deletion: ${getAllExpenses().length}`);

// 4. Delete that specific item using its unique ID
console.log(`\nRemoving item with ID: ${temporaryItem.id}...`);
deleteExpenseById(temporaryItem.id);

// 5. Verify the item was removed successfully
console.log(`Total records after deletion: ${getAllExpenses().length}`);

console.log("\n--- Final Clean Analysis Report ---");
console.log(analyzeExpenses());
