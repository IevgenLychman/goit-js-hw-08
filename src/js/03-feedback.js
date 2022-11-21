import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(textInput, 300));

populateForm();

function formSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function textInput(e) {
  formData[e.target.name] = [e.target.value.trim()];
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedText = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (!savedText) return;
  Object.keys(savedText).forEach(key => {
    const element = form.querySelector(`[name="${key}"]`);
    element.value = savedText[key];
  });
}
