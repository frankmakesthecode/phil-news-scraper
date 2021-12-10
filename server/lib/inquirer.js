const puppeteer = require('puppeteer');

const inquirerScraper = async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://newsinfo.inquirer.net/');

    console.log('Grabbing headlines..');

    const info = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('#ncg-info > h1')).map(
        (elem) => {
          const data = {};

          data.source = 'inquirer';
          data.title = elem.innerText;
          data.link = elem.firstChild.href;

          return data;
        }
      );
    });
    await browser.close();
    return info;
  } catch (error) {
    console.error(error);
  }
};

module.exports = inquirerScraper;
