let total = 0;
function addItem(name, price) {
  document.getElementById("emptyCart").style.display = "none";
  let list = document.getElementById("cartList");
  let li = document.createElement("li");
  li.innerText = name + " - ₹" + price;
  list.appendChild(li);
  total += price;
  document.getElementById("total").innerText = total;
  document.getElementById("bookBtn").disabled = false;
}
