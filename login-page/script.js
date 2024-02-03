let expenses = [];

function addExpense() {
 let item = document.getElementById("item").value;
 let cost = document.getElementById("cost").value;

 if (item && cost) {
  expenses.push({item, cost});
  document.getElementById("expenseTable").innerHTML += "<tr><td>" + item + "</td><td>$" + cost + "</td><td><button onclick='deleteExpense(" + (expenses.length - 1) + ")'>Delete</button></td></tr>";
  document.getElementById("total").innerHTML = "Total: $" + getTotal();
  document.getElementById("item").value = "";
  document.getElementById("cost").value = "";
 }
}

function deleteExpense(index) {
 expenses.splice(index, 1);
 document.getElementById("expenseTable").deleteRow(index + 1);
 document.getElementById("total").innerHTML = "Total: $" + getTotal();
}

function getTotal() {
 let total = 0;

 for (let i = 0; i < expenses.length; i++) {
  total += parseInt(expenses[i].cost);
 }

 return total;
}


