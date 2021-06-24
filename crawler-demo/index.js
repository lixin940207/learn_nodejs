const axios = require('axios');
const cheerio = require('cheerio');

(async () => {

    const res = await axios.get('https://www.bbc.com/news');
    const $ = cheerio.load(res.data);
    const container = $('div#news-top-stories-container > div > div > div > div');
    const primary_item = container.children('.nw-c-top-stories__primary-item').children('div').children('div');
    console.log(primary_item.find('a').text());


})()
    .then(value => {
    })
    .catch(reason => {
    })
