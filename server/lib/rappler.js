const puppeteer = require('puppeteer');

const rapplerScraper = async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://www.rappler.com/');

    console.log('Grabbing headlines..');

    const info = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('h3 > a')).map((elem) => {
        const data = {};

        data.source = 'rappler';
        data.title = elem.innerText;
        data.link = elem.href;

        return data;
      });
    });

    await browser.close();
    return info;
  } catch (error) {
    console.error(error);
  }
};

module.exports = rapplerScraper;
