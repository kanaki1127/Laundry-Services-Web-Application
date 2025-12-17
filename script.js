let total = 0;

/* Scroll to booking section from hero button */
function scrollToBooking() {
  document.getElementById("services").scrollIntoView({
    behavior: "smooth",
  });
}

/* Add service item to cart */
function addItem(name, price) {
  let li = document.createElement("li");
  li.innerText = name + " - ₹" + price;

  document.getElementById("itemList").appendChild(li);

  total += price;
  document.getElementById("total").innerText = total;
}

/* Book now button */
function bookNow() {
  document.getElementById("message").innerText =
    "Thank you For Booking the Service We will get back to you soon!";
}
