
// Meniu
var clickEl  = document.querySelector('.side-menu-hamburger');
var menuEl = document.querySelector('.side-menu');

console.log(clickEl);

clickEl.addEventListener('click', function(e) {
  if(menuEl.classList.contains('active')) {
    e.currentTarget.classList.remove('open');
    menuEl.classList.remove('active');
  } else {
    e.currentTarget.classList.add('open');
    menuEl.classList.add('active');
  }
 
});
// end meniu

// slow scrol

    $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

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
        }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    })
    });
 
// end slow