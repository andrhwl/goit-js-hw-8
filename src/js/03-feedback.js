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

function clearData(evt){
  evt.preventDefault();
  const clearDataStorage = localStorage.getItem(LOCAL_KEY);
  const clearDataStorageJSON = JSON.parse(clearDataStorage);
  if(areaMsg.value ==="" || inputEmail.value ===""){
      alert("Input required!");
     return;
  }else{
     console.log(clearDataStorageJSON);
  }
 
  localStorage.removeItem(LOCAL_KEY);
  form.reset();
  delete dataStorage.email;
  delete dataStorage.message;
};