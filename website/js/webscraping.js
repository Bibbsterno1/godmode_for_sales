// Importing required dependencies
const axios = require('axios');
const cheerio = require('cheerio');

// Defining the WebScrapedSchema
let webScrapedData = [];

// Function to perform web scraping
function performWebScraping(url) {
    axios.get(url)
        .then(response => {
            const $ = cheerio.load(response.data);
            $('div').each((i, elem) => {
                webScrapedData[i] = {
                    data: $(elem).text()
                }
            });
            document.getElementById('webScrapingButton').disabled = false;
            document.dispatchEvent(new CustomEvent('webScrapedDataFetched'));
        })
        .catch(error => {
            console.error(error);
        });
}

// Event listener for the web scraping button
document.getElementById('webScrapingButton').addEventListener('click', () => {
    document.getElementById('webScrapingButton').disabled = true;
    performWebScraping('https://www.example.com');
});

// Event listener for the webScrapedDataFetched event
document.addEventListener('webScrapedDataFetched', () => {
    console.log('Web scraped data fetched successfully');
});