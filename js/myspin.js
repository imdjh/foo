// spin options
var spinOptions = {
    lines: 13 // The number of lines to draw
    , length: 28 // The length of each line
    , width: 14 // The line thickness
    , radius: 42 // The radius of the inner circle
    , scale: 1 // Scales overall size of the spinner
    , corners: 1 // Corner roundness (0..1)
    , color: '#000' // #rgb or #rrggbb or array of colors
    , opacity: 0.25 // Opacity of the lines
    , rotate: 0 // The rotation offset
    , direction: 1 // 1: clockwise, -1: counterclockwise
    , speed: 1.3 // Rounds per second
    , trail: 42 // Afterglow percentage
    , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
    , zIndex: 2e9 // The z-index (defaults to 2000000000)
    , className: 'spinner' // The CSS class to assign to the spinner
    , top: '50%' // Top position relative to parent
    , left: '50%' // Left position relative to parent
    , shadow: false // Whether to render a shadow
    , hwaccel: false // Whether to use hardware acceleration
    , position: 'absolute' // Element positioning
};

var spinTarget = document.getElementById('doit-qpanel')
var spinner = new Spinner(spinOptions).spin(spinTarget);


// TODO: replace alert()
function loadXMLDoc() {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                window.jsonQA = JSON.parse(xmlhttp.responseText);
                window.sizeJSONQA = window.jsonQA.q.length;
                spinner.stop();     // Stop the spinner on load
                initpage();
                rendereverything();
            }
            else if (xmlhttp.status == 404) {
                alert('您要找试题不在!');
            }
            else {
                alert('something else other than 200 was returned');
            }
        }
    };
    xmlhttp.open("GET", "http://localhost:3000/api/json?n=1037", true);
    xmlhttp.send();
}

// get Ajax on load
if (window.addEventListener) // W3C standard
{
    window.addEventListener('load', loadXMLDoc, false); // NB **not** 'onload'
}
else if (window.attachEvent) // Microsoft
{
    window.attachEvent('onload', loadXMLDoc);
}
