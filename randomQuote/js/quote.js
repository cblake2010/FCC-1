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
        "text": "Kristian"
        "author": "Vos"
    }
];


function genRndQuote() {
  return quotes[0].text;
}

  $(document).ready(function() {
    $("#genQuote").click(function() {
      $("#quote").html(
        genRndQuote()
      );
    });
  });
