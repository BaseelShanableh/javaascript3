const projectForm = document.getElementById('projectForm');
const cardsContainer = document.getElementById('cardsContainer');

projectForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const subject = document.getElementById('subject').value;
  const description = document.getElementById('description').value;
  const userTypes = document.getElementById('userTypes').value;
  const technologies = document.getElementById('technologies').value;

  const projectData = {
    subject,
    description,
    userTypes,
    technologies,
  };

  // Store data in session storage
  sessionStorage.setItem('projectData', JSON.stringify(projectData));

  // Display data on cards
  displayProjectData(projectData);
});

// Function to display project data from session storage on page load
window.addEventListener('load', function () {
  const projectData = JSON.parse(sessionStorage.getItem('projectData'));
  if (projectData) {
    displayProjectData(projectData);
  }
});

function displayProjectData(projectData) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <h3>${projectData.subject}</h3>
    <p>Description: ${projectData.description}</p>
    <p>User Types: ${projectData.userTypes}</p>
    <p>Technology Used: ${projectData.technologies}</p>
  `;
  cardsContainer.appendChild(card);
}
