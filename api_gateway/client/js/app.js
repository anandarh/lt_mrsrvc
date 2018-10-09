$(document).ready(function(){
    $("#submit").on('click', function(){
        $.ajax({
            url: 'http://localhost:3000/api/Clients',
            type: 'POST',
            dataType: 'json',
            data: $("#form").serialize(),
            success: function(result) {
                console.log(result);
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });
    });
});