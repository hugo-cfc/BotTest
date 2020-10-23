const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch(/*{headless: false}*/);
  const page = await browser.newPage();
  
  /*await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  });*/

  const spotifyCharts = `https://spotifycharts.com/regional/br/daily/latest`
  await page.goto(spotifyCharts);

  const nameMusic = await page.evaluate(() => {
      return document.querySelector('.chart-table-track strong').textContent
  })

  const nameSinger = await page.evaluate(() => {
      return document.querySelector('.chart-table-track span').textContent
  })

  let rankingSpotify = `🎙️🎶 "${nameMusic} ${nameSinger}" é a música mais tocada do Dia!`;

  let phrase = ``;

  (async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    const urlPhrases = `https://lerolero.com/`
    await page.goto(urlPhrases)

    phrase = await page.evaluate(() => {
      console.log('Chegou aqui')
      return document.querySelector('.sentence.sentence-exited').textContent
    })
    
    console.log(`${rankingSpotify}\n${phrase}`)
  })()


})();