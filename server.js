var cheerio = require("cheerio");
var axios = require("axios");

axios.get ("https://old.reddit.com/r/webdev:). then(function(response.data))

var $ = cheerio.load(response.data);

var results = [];

$("h4.headline-link").each(function(i, element){
    var title = $(element).text();

    var imgLink = $(element).parent().attr("href");
    results.push({ link: imgLink,
    title: title,
    link: link,
});
});