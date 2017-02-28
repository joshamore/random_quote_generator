/*
    This function pulls the quote from an API. 
    
    // Below callback is not working (with &callback=? attached.).
*/
function getQuote() {
    $.ajaxSetup({ cache: false });
    var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";
    $.getJSON(url, null, function(quoteResults) {
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




// Not working alt attempt at API request. 
/*
    var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        crossDomain: true,
        headers: { 'Access-Control-Allow-Origin' : 'url' },
        success: function (quoteResults) {
            document.getElementById('message').innerHTML = quoteResults[0].content;
            document.getElementById('author').innerHTML = "- " + quoteResults[0].title;
            tweetQuote();

        }
    });
*/