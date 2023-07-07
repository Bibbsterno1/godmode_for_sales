// Importing dependencies
import { generateLead, fetchLinkedInData, fetchHubSpotData, performWebScraping, displayLeadData } from './lead_generation.js';
import { linkedInData, hubSpotData, webScrapedData, leadData } from './linkedin_api.js';
import { linkedInData, hubSpotData, webScrapedData, leadData } from './hubspot_api.js';
import { linkedInData, hubSpotData, webScrapedData, leadData } from './webscraping.js';
import { linkedInData, hubSpotData, webScrapedData, leadData } from './ai.js';

// Event listeners for buttons
document.getElementById('leadGenerationButton').addEventListener('click', generateLead);
document.getElementById('linkedInButton').addEventListener('click', fetchLinkedInData);
document.getElementById('hubSpotButton').addEventListener('click', fetchHubSpotData);
document.getElementById('webScrapingButton').addEventListener('click', performWebScraping);

// Event listeners for data fetch events
document.addEventListener('leadGenerated', displayLeadData);
document.addEventListener('linkedInDataFetched', displayLeadData);
document.addEventListener('hubSpotDataFetched', displayLeadData);
document.addEventListener('webScrapedDataFetched', displayLeadData);

// Initial display of lead data
displayLeadData();