$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
            });
        } // End if
    });
});

setTimeout(function () { window.alert("Hello 🙌, I am the developer of this website 😊, I am here with a request, please judge 🙏 this site and give me suggestions to improve it. I am a newbie 😁 and want to improve, so please help me. Give me your suggestions in the comment section. 😏") }, 2000);