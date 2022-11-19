import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
const inputEl = document.querySelector('email');
const textAreaEl = document.querySelector('message');

form.addEventListener('input', throttle(saveMessage, 500))
form.addEventListener("submit", submitForm);
// let formData = { email : "", message: "" }
updateIntput();


function saveMessage(evt) {
  evt.preventDefault();
  const formData = {}
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

// function saveMessage(evt) {
//   evt.preventDefault();
//   const { elements: { email, message } } = evt.currentTarget;
//   const formData = { email: email.value, message: message.value }
//   // console.log(formData)
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
// }

function submitForm(evt) {
  evt.preventDefault();
  const { elements: { email, message } } = evt.currentTarget;
  const formData = { email: email.value, message: message.value }
  console.log(formData)
  localStorage.removeItem(LOCALSTORAGE_KEY)
  form.reset();

}

function updateIntput() {
  if (localStorage.getItem(LOCALSTORAGE_KEY) === null) {
    return
  }
  const auditInput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
  form.elements.email.value = auditInput.email;
  form.elements.message.value = auditInput.message
}

