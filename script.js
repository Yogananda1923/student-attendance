const form = document.getElementById('attendance-form');
const nameInput = document.getElementById('student-name');
const presentList = document.getElementById('present-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  if (name === '') return;

  const li = document.createElement('li');
  li.textContent = name;

  presentList.appendChild(li);
  nameInput.value = '';
});
