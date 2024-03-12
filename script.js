// Dynamically show descriptions on hover
document.querySelectorAll('.walkthrough-info').forEach(walkthrough => {
    const description = walkthrough.dataset.description;
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    walkthrough.appendChild(descriptionElement);
});
