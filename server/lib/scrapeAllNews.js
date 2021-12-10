const rapplerScraper = require('../lib/rappler');
const inquirerScraper = require('../lib/inquirer');

const scrapeAllNews = async () => {
  const rappler = await rapplerScraper();
  const inquirer = await inquirerScraper();

  return [...rappler, ...inquirer];
};

module.exports = scrapeAllNews;
