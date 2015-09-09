// Main page loading sequence.
$(document).ready(function() {
    
    // Start the Zurb Foundation 5 layout functionality.
    $(this).foundation();
    
    // Attach the project links to their buttons.
    setProjectLinks();
    
});

// Attach the project links to their buttons.
function setProjectLinks() {
    var i, button;
    for (i = 0; i < 6; i++) {
        document.querySelector("#button-" + i).disabled = "disabled";
    }
}