// Importing required dependencies
const axios = require('axios');

// Defining the HubSpot API URL
const HUBSPOT_API_URL = 'https://api.hubapi.com/contacts/v1/contact/';

// Defining the HubSpot API Key
const HUBSPOT_API_KEY = 'YOUR_HUBSPOT_API_KEY';

// Defining the HubSpot Data variable
let hubSpotData = [];

// Defining the HubSpot Schema
let HubSpotSchema = {
  email: String,
  firstname: String,
  lastname: String,
  company: String,
  phone: String
};

// Function to fetch data from HubSpot
function fetchHubSpotData() {
  axios.get(`${HUBSPOT_API_URL}?hapikey=${HUBSPOT_API_KEY}`)
    .then(response => {
      hubSpotData = response.data.contacts.map(contact => {
        return {
          email: contact.properties.email.value,
          firstname: contact.properties.firstname.value,
          lastname: contact.properties.lastname.value,
          company: contact.properties.company.value,
          phone: contact.properties.phone.value
        };
      });
      document.dispatchEvent(new CustomEvent('hubSpotDataFetched'));
    })
    .catch(error => {
      console.error('Error fetching data from HubSpot', error);
    });
}

// Exporting the fetchHubSpotData function and hubSpotData variable
module.exports = {
  fetchHubSpotData,
  hubSpotData
};