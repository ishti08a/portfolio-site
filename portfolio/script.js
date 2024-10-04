document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here you can handle the form submission logic (e.g., send data to a server)
    alert(`Thank you for your message, ${name}!`);

    // Clear the form
    document.getElementById("contact-form").reset();
  });
