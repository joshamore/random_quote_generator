/*
    This function pulls the quote from an API. 
*/
function getQuote() {
    $.ajaxSetup({ cache: false });
    $.getJSON('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', function(quoteResults) {
        document.getElementById('message').innerHTML = quoteResults[0].content;
        document.getElementById('author').innerHTML = "- " + quoteResults[0].title;
        tweetQuote();
        
    });

}

function tweetQuote() {
    var quote = $('#message').text() + $('#author').text();
    quote = encodeURIComponent(quote);
    
    $("#tweetButton").html('<a target="_blank" href="https://twitter.com/intent/tweet?text=' + quote + '"><img src="assets/twitter_icon.svg" id="twitterIcon"></i></a>');  
}