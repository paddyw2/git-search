$(document).ready( function () {

// search function

$( "form" ).submit(function() {
    
    // getting user input from form
    
    var username = $('#entry_field').val();
    var githubAPI = "https://api.github.com/users/" + username;
    
    // starting ajax function to get json data
    
    $.ajax({
        url: githubAPI,
        dataType: "json",
        success: function(data) {
            
            // if data is successfully fetched
            
            $.getJSON( githubAPI, function( data ) {
                
                // target specific data
                
                var name = data.name;
                var blog = data.blog;
                var location = data.location;
                var image = data.avatar_url;
                
                // if user has all required data, output on page
                
                if (name && blog && location && image) {
                    
                    $('.welcome').empty();
                    $('.container').addClass('slideUp');
                    $('.display').addClass('fadeIn');
                    $('.menu').addClass('show');
                    $('#entry_field').val('');
                    $( "#entry_field" ).blur();
                    $( "#submit" ).blur();
                    
                    var div = document.getElementById('output');
                    div.innerHTML = '<h1>' + name + '</h1><br>';
                    var div2 = document.getElementById('output2');
                    div2.innerHTML = '<a href='+blog+'><p>' + blog + '</p></a><br>';
                    var div3 = document.getElementById('output3');
                    div3.innerHTML = "<img src=' " +image+ " ' >";
                } else {
                    alert('user does not have enough info!');
                };  
            });
        },
        
        // if data is not successfully fetched
        
        error: function(data) {
        alert('User does not exist!');
        }
    });  
});

// end search function

});