
$(document).ready( function () {


    
    
    $( "form" ).submit(function() {
    
        
        var username = $('#entry_field').val();
  
        var githubAPI = "https://api.github.com/users/" + username;
  
        
        
        $.getJSON( githubAPI, function( data ) {
            
  var name = data.name;
  var blog = data.blog;
  var location = data.location;
  var image = data.avatar_url;
            
            if (name) {
    
  var div = document.getElementById('output');
  div.innerHTML = name + '<br>';
    
  var div2 = document.getElementById('output2');
  div2.innerHTML = blog + '<br>';

  var div3 = document.getElementById('output3');
  div3.innerHTML = "<img src=' " +image+ " ' >";
            } else {
                alert('User not found');
                      };
    
});
        
        
    });
    
});