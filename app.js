$(window).on('load', RandomQuote);
$('#genNewQuote').click(RandomQuote);
$('#twitter').click(tweetQuote);

let currentQuote ="",
    currentAuthor = "";

function RandomQuote(e){
  event.preventDefault;
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/?",
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(response){
      // console.log(response);
      // console.log(response.quoteText);
      // console.log(response.quoteAuthor);
      // console.log((response.quoteAuthor).length)
      currentQuote = response.quoteText;
      currentAuthor = response.quoteAuthor;
      
      if((response.quoteAuthor).length === 0){
        document.getElementById('authorContainer').innerHTML = '<i>'+'— '+"Anonymous"+ '</i>';
      }else{
        document.getElementById('quoteContainer').innerHTML = '"' + response.quoteText + '"';
       document.getElementById('authorContainer').innerHTML = '<i>'+'— '+response.quoteAuthor+ '</i>';
      }

    }
    
  });
}

// Tweet Quote function
function tweetQuote(){
 $(twitter).attr('href','https://twitter.com/intent/tweet?text='+ '"' + currentQuote + '"' + ' —' + currentAuthor)
}