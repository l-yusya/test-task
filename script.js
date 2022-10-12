(function () {
  const form = document.getElementById("create-form");
  const submit = document.getElementById("submit");
  const email = document.getElementById("email");
  let userEmail = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    userEmail.push(email.value);
  });

  const confirmText = document.getElementsByClassName("confirmation__text");

  function openPopUp() {
    document.getElementById("popUp").style.display = "block";
    confirmText.innerHTML = `Hello, user with email ${userEmail}!`;
  }

  submit.addEventListener("click", openPopUp);

  const cancel = document.getElementById("cancel");

  function closePopUp() {
    document.getElementById("popUp").style.display = "none";
  }

  cancel.addEventListener("click", closePopUp);

  const confirm = document.getElementById("confirm");
  const status = document.getElementById("status");
  
  function handleSubmit() {
    closePopUp();
    form.style.display = "none";
    const welcomeMessage = document.getElementById("status__container");
    welcomeMessage.style.display = "block";
    // status.innerHTML = "Hello, user with email !";
  }

  confirm.addEventListener("click", handleSubmit);
})();
