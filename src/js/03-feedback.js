import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

const LOCALSTORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', formSubmit);
refs.form.addEventListener('input', throttle(textInput, 300));

populateForm();

function formSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function textInput(e) {
  const text = {
    email: refs.form.email.value,
    message: refs.form.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(text));
}

function populateForm() {
  const savedText = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (savedText) {
    refs.form.elements.email.value = savedText.email;
    refs.form.elements.message.value = savedText.message;
  }
}
