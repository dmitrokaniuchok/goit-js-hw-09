let formData = {
  email: '',
  message: '',
};
const localStorageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const storedData = localStorage.getItem(localStorageKey);
if (storedData) {
  formData = JSON.parse(storedData);
  form.querySelector('input[name="email"]').value = formData.email;
  form.querySelector('textarea[name="message"]').value = formData.message;
}
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();

  formData = { email: '', message: '' };
});
