// Main page loading sequence.
$(document).ready(function() {
    
    // Start the Zurb Foundation 5 layout functionality.
    $(this).foundation();
    
    // Attach the project links to their buttons.
    setProjectLinks();
    
});

// Attach the project links to their buttons.
function setProjectLinks() {
    var links = [
        "http://p2.matthewbullen.me/",
        "https://github.com/mattbullen/harvard-cscie15-p2",
        "http://p3.matthewbullen.me/",
        "https://github.com/mattbullen/harvard-cscie15-p3",
        "http://p4.matthewbullen.me/",
        "https://github.com/mattbullen/harvard-cscie15-p4",
    ];
    var i, button;
    for (i = 0; i < 6; i++) {
        button = document.querySelector("#button-" + i);
        button.setAttribute("data-href", links[i]);
        button.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            window.location = this.getAttribute("data-href");
        });
    }
}