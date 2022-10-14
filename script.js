(function () {
  const form = document.getElementById("create-form");
  const submit = document.getElementById("submit");
  let userEmail;


  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    userEmail = data.email;
    console.log(userEmail);
    openPopUp();
  });

  
  function openPopUp() {
    document.getElementById("popUp").style.display = "block";
    document.getElementById("confirmation__text").innerHTML = `Please confirm account creation for <em> ${userEmail} </em>`;
  }


  const cancel = document.getElementById("cancel");

  function closePopUp() {
    document.getElementById("popUp").style.display = "none";
  }

  cancel.addEventListener("click", closePopUp);

  const confirm = document.getElementById("confirm");
  const status = document.getElementById("status__text");
  // const welcomeMessage = document.getElementById("status__container");
  
  function handleSubmit() {
    closePopUp();
    form.style.display = "none";
    document.getElementById("status__container").style.display = "block";
    status.innerHTML = `Hello, user with email <em>${userEmail}</em>!`;
  }

  confirm.addEventListener("click", handleSubmit);
})();
