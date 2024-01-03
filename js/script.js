// Get references to the elements
const form = document.getElementById("rating-form");
const radios = document.getElementsByName("rating");
const labels = document.getElementsByTagName("label");
const submitBtn = document.getElementById("submit-btn");

// Disable the submit button by default
submitBtn.disabled = true;

// Add an event listener to each radio button
for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener("change", function () {
    // Enable the submit button when a rating is selected
    submitBtn.disabled = false;

    // Remove the 'focused' class from all labels
    for (let j = 0; j < labels.length; j++) {
      labels[j].classList.remove("focused");
    }

    // Add the 'focused' class to the current label
    this.nextElementSibling.classList.add("focused");
  });
}

// Add an event listener to the form
form.addEventListener("submit", function (e) {
  // Prevent the form from submitting
  e.preventDefault();

  // Get the selected rating
  let rating;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      rating = radios[i].value;
      break;
    }
  }

  // Display a confirmation message
  const msg = `
  <div class="confirmation">
    <img
        src="assets/images/thank-you-image.svg"
        alt="A mobile device collecting data"
        class="confirmation__image"
    />
    <p class="confirmation__selection">You selected ${rating} out of 5</p>
    <h1 class="confirmation__title">Thank you!</h1>
    <p class="confirmation__text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
    </p>
  </div>`;

  document.querySelector("main").innerHTML = msg;
});
