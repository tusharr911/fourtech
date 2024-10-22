document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".demo-form");
  const firstName = document.querySelector("#first-name");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");
  const website = document.querySelector("#website");
  const revenue = document.querySelector("#revenue");

  const thankYouMessage = document.querySelector("#thank-you-message");
  const formTitle = document.querySelector("#form-title");
  const formSubtitle = document.querySelector("#form-subtitle");
  const formFooter = document.querySelector("#form-footer");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      form.style.display = "none";
      formTitle.style.display = "none";
      formSubtitle.style.display = "none";
      formFooter.style.display = "none";

      thankYouMessage.style.display = "block";
    }
  });

  function validateForm() {
    let isValid = true;
    clearErrors();

    if (firstName.value.trim() === "") {
      showError(firstName, "First Name is required");
      isValid = false;
    }

    if (!validateEmail(email.value)) {
      showError(email, "Please enter a valid email address");
      isValid = false;
    }

    if (!validatePhone(phone.value)) {
      showError(phone, "Please enter a valid phone number (minimum 7 digits)");
      isValid = false;
    }

    if (website.value.trim() === "") {
      showError(website, "Website is required");
      isValid = false;
    }

    if (revenue.value === "") {
      showError(revenue, "Please select your monthly revenue");
      isValid = false;
    }

    return isValid;
  }

  function showError(input, message) {
    const parent = input.parentElement;
    const errorElement = document.createElement("div");
    errorElement.classList.add("error-message");
    errorElement.innerText = message;
    parent.appendChild(errorElement);
    input.classList.add("input-error");
  }

  function clearErrors() {
    const errors = document.querySelectorAll(".error-message");
    errors.forEach((error) => error.remove());

    const inputs = document.querySelectorAll(".input-error");
    inputs.forEach((input) => input.classList.remove("input-error"));
  }

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function validatePhone(phone) {
    const phonePattern = /^[0-9]{7,}$/;
    return phonePattern.test(phone);
  }
});
