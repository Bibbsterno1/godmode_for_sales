// Importing required dependencies
import axios from 'axios';

// LinkedIn API URL
const LINKEDIN_API_URL = 'https://api.linkedin.com/v2/';

// LinkedIn Data Schema
const LinkedInSchema = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  position: '',
};

// Variable to hold LinkedIn data
let linkedInData = [];

// Function to fetch LinkedIn data
function fetchLinkedInData() {
  axios.get(`${LINKEDIN_API_URL}me`)
    .then(response => {
      linkedInData = response.data.elements.map(user => {
        return {
          id: user.id,
          firstName: user.firstName.localized.en_US,
          lastName: user.lastName.localized.en_US,
          email: user.emailAddress,
          company: user.positions.values[0].company.name,
          position: user.positions.values[0].title,
        };
      });
      document.dispatchEvent(new CustomEvent('linkedInDataFetched', { detail: linkedInData }));
    })
    .catch(error => {
      console.error('Error fetching LinkedIn data:', error);
    });
}

// Exporting variables and functions
export { LinkedInSchema, linkedInData, fetchLinkedInData };