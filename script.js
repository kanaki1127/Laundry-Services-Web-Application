let total = 0;

// Function to add items to cart
function addItem(name, price) {
  document.getElementById("emptyCart").style.display = "none";

  let list = document.getElementById("cartList");
  let li = document.createElement("li");
  li.innerText = name + " - ₹" + price;
  list.appendChild(li);

  total += price;
  document.getElementById("total").innerText = total;
}

// ✅ BOOK NOW BUTTON FUNCTIONALITY
document.getElementById("bookBtn").addEventListener("click", function () {
  const name = document.querySelector(".book input[type='text']").value.trim();
  const email = document
    .querySelector(".book input[type='email']")
    .value.trim();
  const phone = document
    .querySelector(".book input[type='text'][id='custPhone']")
    .value.trim();

  // Check for empty fields
  if (name === "" || email === "" || phone === "") {
    alert("Please fill all the details before booking.");
    return;
  }

  // Validate phone number: must be 10 digits and only numbers
  if (phone.length !== 10 || isNaN(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  // Validate if cart has at least one service
  if (total === 0) {
    alert("Please add at least one service to the cart.");
    return;
  }

  alert(
    "Booking Successful!\n\n" +
      "Name: " +
      name +
      "\n" +
      "Total Amount: ₹" +
      total
  );

  // Reset cart
  document.getElementById("cartList").innerHTML = "";
  document.getElementById("emptyCart").style.display = "block";
  document.getElementById("total").innerText = "0";

  total = 0;

  // Clear input fields
  document.querySelector(".book input[type='text']").value = "";
  document.querySelector(".book input[type='email']").value = "";
  document.querySelector(".book input[type='text'][id='custPhone']").value = "";
});

// ✅ SUBSCRIBE BUTTON FUNCTIONALITY
document.querySelector(".subscribe-btn").addEventListener("click", function () {
  const name = document
    .querySelector(".newsletter input[type='text']")
    .value.trim();
  const email = document
    .querySelector(".newsletter input[type='email']")
    .value.trim();

  if (name === "" || email === "") {
    alert("Please enter your name and email to subscribe.");
    return;
  }

  alert("Thank you for subscribing, " + name + "!");

  // Clear inputs
  document.querySelector(".newsletter input[type='text']").value = "";
  document.querySelector(".newsletter input[type='email']").value = "";
});
