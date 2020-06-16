function loadScript(url)
{    
       var head = document.getElementsByTagName('head')[0];
       var script = document.createElement('script');      
       script.src = url;
       head.appendChild(script);
}

$(document).ready( function() {
       loadScript("../javascript/navbar.js");
});