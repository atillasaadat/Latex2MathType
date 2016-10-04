var elements = document.getElementsByTagName('*');

var errorString = ":Failed to parse(Missing texvc executable; please see math/README to configure.):";

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var splitTxt = text.split("configure.):");
            var replacedText = text.replace(text, splitTxt[0]);
            if (replacedText !== text ) {
            	var mathImg = document.createElement("IMG");
            	mathImg.src = "https://latex.codecogs.com/gif.latex?" + splitTxt[splitTxt.length-1] ;
            	//mathImg.src = "https://i.imgur.com/fwFHqzD.jpg";
            	var textnode = document.createTextNode(" : Error"); 
                element.replaceChild(mathImg, node);
                element.appendChild(textnode);
                //element.replaceChild(document.createTextNode(replacedText), node);
            }
            /*
            if splitTxt.length > 1{
                var mathImg = document.createElement("IMG");
                //mathImg.src = "https://latex.codecogs.com/gif.latex?" + splitTxt[splitTxt.length-1];
                //mathImg.src = "https://i.imgur.com/fwFHqzD.jpg";
                mathImg.src = "http://www.workingclassroom.org/site/wp-content/uploads/slideshow-gallery-2/100x100-LOGO-small.jpg";
                if (replacedText !== text) {
                    element.replaceChild(mathImg, node);
                    //element.replaceChild(document.createTextNode(replacedText), node);
                }
            }*/
            //var mathImg = document.createElement("IMG");
            //mathImg.src = "https://i.imgur.com/fwFHqzD.jpg";
        }
    }
}