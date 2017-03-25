(function(){
	
    var url = 'http://api.themoviedb.org/3/',
        mode = 'search/movie?query=',
        input,
        movieName,
        key = '&api_key=c604473f4623127709a4834b2565b01d';

    $('#button').on('click', function() {
        var input = $('#movie').val(),
            movieName = encodeURI(input);

        $.ajax({
            type: 'GET',
            url: url + mode + input + key,      
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
                displayData(json);
            },
            error: function(e) {
                console.log(e.message);
            }
        });

        function displayData(json){

        	var resultsContainer = $('.container');
            var imgUrlBeginning = 'https://image.tmdb.org/t/p/w500';
        	var results = '';

        	$.each(json.results, function(i, val){
              
        		results += '<ul><li class="title">' + val.original_title + '</li><li class="poster"><img src=' + imgUrlBeginning + val.poster_path + '></li><li class="plot">'
        		+ val.overview + '</li></ul>';
        	})

        	resultsContainer.html(results);
        }
    });
})(jQuery);