function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var quotes = [
    {
        "text": "Akira",
        "author": "Laine"
    },
    {
        "text": "Harry",
        "author": "Potter"
    },
    {
        "text": "Sherlock",
        "author": "Holmes"
    },
    {
        "text": "Kristian",
        "author": "Vos"
    }
];


function genRndQuote() {
  var i = getRandomInt(0, quotes.length);
  return quotes[i].text;
}

  $(document).ready(function() {
    $("#genQuote").click(function() {
      $("#quote").html(
        genRndQuote()
      );
    });
  });
