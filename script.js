(() => {
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          alert("Hvala! Rezervacija je prejeta.");
          form.reset();
          window.location.href = "index.html";
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
