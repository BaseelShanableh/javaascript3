const personalForm = document.getElementById('personalForm');
const cardsContainer = document.getElementById('cardsContainer');

personalForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const description = document.getElementById('description').value;
  const major = document.getElementById('major').value;

  const languages = [];
  const languageInputs = document.querySelectorAll('input[name="languages"]:checked');
  languageInputs.forEach((input) => {
    languages.push(input.value);
  });

  const userData = {
    name,
    age,
    gender,
    description,
    major,
    languages,
  };

  // Stores the data in the local storage
  localStorage.setItem('userData', JSON.stringify(userData));

  // Displays the data in the div
  displayUserData(userData);
});

window.addEventListener('load', function () {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData) {
    displayUserData(userData);
  }
});

function displayUserData(userData) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <h3>${userData.name}</h3>
    <p>Age: ${userData.age}</p>
    <p>Gender: ${userData.gender}</p>
    <p>Description: ${userData.description}</p>
    <p>Major: ${userData.major}</p>
    <p>Languages: ${userData.languages.join(', ')}</p>
  `;
  cardsContainer.appendChild(card);
}
