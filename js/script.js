$(document).ready( function () {
    $(".navbar-toggle").click(function(){
        // $("html").toggleClass("overlay");
        // $("body").toggleClass("overlay");
        //  jumboStretch();      
        
    });
  
});

$(window).on("load",function(e){
    jumboStretch();
});

function jumboStretch(){
    if (window.innerWidth <= 640){
        var h = window.height() - 70;
        $(".jumbotron.primary").css("min-height" , h +"px");
    }
}


function validate_input($form){
    $('#mce-error-response').empty().hide();
    $('#mce-success-response').hide();

    var firstName = $('#mce-FNAME').val();

    if(firstName == ""){
        $('#mce-error-response').show().append("Please specify first name");
        return false;
    }

    var lastName = $('#mce-LNAME').val();
    
    if(lastName == ""){
        $('#mce-error-response').show().append("Please specify last name");
        return false;
    }
    var email = $('#mce-EMAIL').val();

    if(!validateEmail(email)){
        $('#mce-error-response').show().append("Please check email again");
        return false;
    };
    var phone = $('#mce-MMERGE3').val();
    var businessName = $('#mce-MMERGE4').val();

    return true;
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
