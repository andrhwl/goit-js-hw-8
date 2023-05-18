
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name=email]');
const messageInput = document.querySelector('textarea[name=message]');
const btnSubmit = document.querySelector('button[type=submit]');


const saveLocalStorage =
  throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

form.addEventListener('input', saveLocalStorage);

window.addEventListener('DOMContentLoaded', () => {
  const formState = JSON.parse(localStorage.getItem('feedback-form-state'))
  if (formState)
    emailInput.value = formState.email || '',
    messageInput.value = formState.message || ''
});

btnSubmit.addEventListener('click', (e) => {
  e.defaultPrevented
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;
  console.log({ email: emailValue, message: messageValue });
  localStorage.removeItem('feedback-form-state')
  emailInput.value = ''
  messageInput.value = ''
} )
