var load_xml = function (name) {
    console.log('load_xml call');
    if (window.XMLHttpRequest) {
    	xhttp = new XMLHttpRequest();
    }
    else {
    	xhttp = new ActiveXObject("Microsoft.XMLDOM");
    }
    xhttp.open("GET", name, false);
    xhttp.setRequestHeader("Content-Type", "text/xml")
    xhttp.send();
    return xhttp.responceXML;
};