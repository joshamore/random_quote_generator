// Creates the tweet button.
function tweetQuote() {
    var quote = $('#message').text() + $('#author').text();
    quote = encodeURIComponent(quote);
    
    $("#tweetButton").html('<a target="_blank" href="https://twitter.com/intent/tweet?text=' + quote + '"><img src="assets/twitter_icon.svg" id="twitterIcon"></i></a>');  
}


// This function pulls the quote from an API. 
function getQuote() {    
    var url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback";
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'jsonp',
        jsonpCallback: "mycallback",
        success: function (quoteResults) {
            document.getElementById('message').innerHTML = quoteResults[0].content;
            document.getElementById('author').innerHTML = "- " + quoteResults[0].title;
            tweetQuote();

        }
    });
}
