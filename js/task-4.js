const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const { email, password } = form.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return;
  }

  const data = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(data);
  form.reset();
});
