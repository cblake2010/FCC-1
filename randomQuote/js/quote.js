function genRndQuote() {
  return "String";
}

  $(document).ready(function() {
    $("#genQuote").click(function() {
      $("#quote").html(
        genRndQuote()
      );
    });
  });
