// Importing dependencies
import { LeadSchema } from './lead_generation.js';

// Variable to hold lead data
let leadData = [];

// Function to generate leads using AI
function generateLead() {
  // Simulating AI lead generation process
  let newLead = new LeadSchema({
    name: 'John Doe',
    email: 'john.doe@example.com',
    company: 'Example Inc.',
    position: 'Sales Manager'
  });

  // Adding new lead to lead data
  leadData.push(newLead);

  // Emitting lead generated message
  document.dispatchEvent(new CustomEvent('leadGenerated', { detail: newLead }));
}

// Function to display lead data
function displayLeadData() {
  let leadDisplay = document.getElementById('leadDisplay');
  leadDisplay.innerHTML = '';

  // Displaying each lead in lead data
  leadData.forEach(lead => {
    let leadElement = document.createElement('div');
    leadElement.innerHTML = `
      <h3>${lead.name}</h3>
      <p>${lead.email}</p>
      <p>${lead.company}</p>
      <p>${lead.position}</p>
    `;
    leadDisplay.appendChild(leadElement);
  });
}

// Event listener for lead generation button
document.getElementById('leadGenerationButton').addEventListener('click', generateLead);

// Event listener for lead generated message
document.addEventListener('leadGenerated', displayLeadData);