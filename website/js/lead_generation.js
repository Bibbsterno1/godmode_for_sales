// Importing dependencies
import { LeadSchema } from './ai.js';
import { linkedInData, hubSpotData, webScrapedData } from './main.js';

// Exported Variables
let leadData = [];

// Function to generate leads
function generateLead() {
  // Use AI tool to generate leads
  let newLead = new LeadSchema(linkedInData, hubSpotData, webScrapedData);
  
  // Add new lead to leadData
  leadData.push(newLead);

  // Emit leadGenerated event
  let event = new CustomEvent('leadGenerated', { detail: newLead });
  document.dispatchEvent(event);
}

// Function to display lead data
function displayLeadData() {
  let leadDisplay = document.getElementById('leadDisplay');
  
  // Clear previous lead data
  leadDisplay.innerHTML = '';

  // Display each lead
  leadData.forEach(lead => {
    let leadElement = document.createElement('div');
    leadElement.textContent = JSON.stringify(lead);
    leadDisplay.appendChild(leadElement);
  });
}

// Event listeners
document.getElementById('leadGenerationButton').addEventListener('click', generateLead);
document.addEventListener('leadGenerated', displayLeadData);
document.addEventListener('linkedInDataFetched', generateLead);
document.addEventListener('hubSpotDataFetched', generateLead);
document.addEventListener('webScrapedDataFetched', generateLead);

// Export functions and variables
export { leadData, generateLead, displayLeadData };