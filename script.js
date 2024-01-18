// Get DOM elements
const ratingForm = document.getElementById("rating-form");
const radios = document.querySelectorAll("input[name='rating']");
const labels = document.querySelectorAll("label");
const submitBtn = document.getElementById("submit-btn");

// Initially disable the submit button
submitBtn.disabled = true;

// Add event listeners to the radio buttons
radios.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    // Enable the submit button when a radio button is selected
    submitBtn.disabled = false;
    // Remove the 'focused' class from all labels
    labels.forEach((label) => label.classList.remove("focused"));
    // Add the 'focused' class to the selected label
    labels[index].classList.add("focused");
  });
});

// Add an event listener to the form
ratingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the value of the selected radio button
  const rating = [...radios].find((radio) => radio.checked).value;

  // Create the confirmation message
  const msg = `
  <div class="main__confirmation">
    <img src="images/thank-you-image.svg" alt="A mobile device collecting data" />
    <p class="confirmation__selection">You selected ${rating} out of 5</p>
    <div>
      <h1 class="confirmation__title">Thank you!</h1>
      <p class="confirmation__text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  </div>`;

  // Replace the main content with the confirmation message
  document.querySelector("main").innerHTML = msg;
});
