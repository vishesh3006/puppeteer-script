const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://vishesh3006.github.io/Assignment-3/?pdf=true', {
        waitUntil: 'networkidle0',
    });
    // page.waitForTimeout(1000);
    await page.pdf({ path: 'puppeteerPDF.pdf', format: 'a4' });

    await browser.close();
})();