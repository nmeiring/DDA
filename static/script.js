console.log("ready")
$(function(){
    blurFocus("#email", "Email");
    blurFocus("#product", "Product");
});

var blurFocus = function(field, value) {
    console.log('blurfocus');
$(field).focus(function() {
            $(field).val("");
    })

$(field).blur(function() {
        if ($(field).val() === "") {
            $(field).val(value);
	    console.log('blurred');
        }
    })

}
