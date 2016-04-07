

var isACCClicked = false;
var isFillerProject1 = false;
var isFillerProject2 = false;

function displayACCInfo() {
    if(isACCClicked == false) {
        var infoTextDiv = document.getElementById("ACC");
        infoTextDiv.style.top = "-20px";
        infoTextDiv.style.left = "0px";
        infoTextDiv.style.height = "100%";
        infoTextDiv.style.width = "100%";
        infoTextDiv.style.backgroundColor = "grey";
        infoTextDiv.style.opacity = "0.85";
        infoTextDiv.style.fontSize = "16px";
        infoTextDiv.innerHTML = "<div style='font-weight: bold; text-align: center; font-size: 20px;'>Project Details</div> <div><br><ul> <li>Designed Apply Page</li> <li>Implemented with PHP, Javascript, CSS, HTML</li> <li>Form sends user input to club email</li>  <li>Handwritten and Bootstrap CSS</li> </ul></div>"

        isACCClicked = true;
    }
    else {
        var infoTextDiv = document.getElementById("ACC");
        infoTextDiv.style.top = "100px";
        infoTextDiv.style.left = "auto";
        infoTextDiv.style.height = "auto";
        infoTextDiv.style.width = "auto";
        infoTextDiv.style.backgroundColor = "transparent";
        infoTextDiv.style.opacity = "auto";
        infoTextDiv.style.fontSize = "24px";
        infoTextDiv.innerHTML = "<a class='black' href='http://aggiecodingclub.com/' target='_blank'>Aggie Coding Club <br>Website</a>";
        
        isACCClicked = false;
    }
}




function displayFillerProject1Info() {
    if(isFillerProject1 == false) {
        var infoTextDiv = document.getElementById("FillerProject1");
        infoTextDiv.height = "0px";
        infoTextDiv.width = "0px";
        infoTextDiv.innerHTML = "";

        infoTextDiv.style.backgroundColor = "gainsboro";
        infoTextDiv.style.left = "0px";

        var counter = 0;
        var counterEndVal = 300.0;

        var h = 0;
        var hInc = 80.0/counterEndVal;

        var w = 0;
        var wInc = 100.0/counterEndVal;

        var o = 0;
        var oInc = 1.0/counterEndVal;

        var fsize = 0;
        var fsizeInc = 16.0/counterEndVal;

        var id = setInterval(expandInfo, 5);

        function expandInfo() {
            if  (counter == counterEndVal) {
                clearInterval(id);
            } else {
                ++counter;
                h += hInc;
                o += oInc;
                w += wInc;
                fsize += fsizeInc;

                infoTextDiv.style.height = h + 'px';
                infoTextDiv.style.width = w + '%';
                infoTextDiv.style.opacity = o; 
                infoTextDiv.style.fontSize = fsize + 'px';
                infoTextDiv.style.borderStyle = 'double';
                infoTextDiv.innerHTML = "<ul><li>Filler Text 1</li></ul>";

            }
        }

        isFillerProject1 = true;
    }
    else {
        var infoTextDiv = document.getElementById("FillerProject1");

        infoTextDiv.innerHTML = "";

        infoTextDiv.style.backgroundColor = "gainsboro";
        infoTextDiv.style.left = "0px";

        var counter = 200;
        var h = 80;
        var w = 100;
        var o = 1;
        var fsize = 16;
        var id = setInterval(retractInfo, 5);

        function resetDiv() {
            infoTextDiv.style.left = "15px";
            infoTextDiv.style.height = "80px";
            infoTextDiv.style.width = "100%";
            infoTextDiv.style.fontSize = "24px";
            infoTextDiv.style.opacity = "1";
            infoTextDiv.style.border = "none";
            infoTextDiv.style.backgroundColor = "transparent";
            infoTextDiv.innerHTML = "<a class='black'>Filler Project 1</a>";
            isFillerProject1 = false;
        }

        function retractInfo() {
            if  (counter == 0) {
                clearInterval(id);
                resetDiv();
            } else {
                --counter;
                h -= .4;
                o -= .005;
                w -= .5;
                fsize -= .08;
                infoTextDiv.style.height = h + 'px';
                infoTextDiv.style.width = w + '%';
                infoTextDiv.style.opacity = o; 
                infoTextDiv.style.fontSize = fsize + 'px';
                infoTextDiv.style.borderStyle = 'double';
                infoTextDiv.innerHTML = "<ul><li>Filler Text 1</li></ul>";

            }
        }

    }
}

function displayFillerProject2Info() {
    if(isFillerProject2 == false) {
        var infoTextDiv = document.getElementById("FillerProject2");
        infoTextDiv.height = "0px";
        infoTextDiv.width = "0px";
        infoTextDiv.innerHTML = "";

        infoTextDiv.style.backgroundColor = "gainsboro";
        infoTextDiv.style.left = "0px";

        var counter = 0;
        var counterEndVal = 300.0;

        var h = 0;
        var hInc = 80.0/counterEndVal;

        var w = 0;
        var wInc = 100.0/counterEndVal;

        var o = 0;
        var oInc = 1.0/counterEndVal;

        var fsize = 0;
        var fsizeInc = 16.0/counterEndVal;

        var id = setInterval(expandInfo, 5);

        function expandInfo() {
            if  (counter == counterEndVal) {
                clearInterval(id);
            } else {
                ++counter;
                h += hInc;
                o += oInc;
                w += wInc;
                fsize += fsizeInc;

                infoTextDiv.style.height = h + 'px';
                infoTextDiv.style.width = w + '%';
                infoTextDiv.style.opacity = o; 
                infoTextDiv.style.fontSize = fsize + 'px';
                infoTextDiv.style.borderStyle = 'double';
                infoTextDiv.innerHTML = "<ul><li>Filler Text 2</li></ul>";

            }
        }

        isFillerProject2 = true;
    }
    else {
        var infoTextDiv = document.getElementById("FillerProject2");

        infoTextDiv.innerHTML = "";

        infoTextDiv.style.backgroundColor = "gainsboro";
        infoTextDiv.style.left = "0px";

        var counter = 200;
        var h = 80;
        var w = 100;
        var o = 1;
        var fsize = 16;
        var id = setInterval(retractInfo, 5);

        function resetDiv() {
            infoTextDiv.style.left = "15px";
            infoTextDiv.style.height = "80px";
            infoTextDiv.style.width = "100%";
            infoTextDiv.style.fontSize = "24px";
            infoTextDiv.style.opacity = "1";
            infoTextDiv.style.border = "none";
            infoTextDiv.style.backgroundColor = "transparent";
            infoTextDiv.innerHTML = "<a class='white'>Filler Project 2</a>";
            isFillerProject2 = false;
        }

        function retractInfo() {
            if  (counter == 0) {
                clearInterval(id);
                resetDiv();
            } else {
                --counter;
                h -= .4;
                o -= .005;
                w -= .5;
                fsize -= .08;
                infoTextDiv.style.height = h + 'px';
                infoTextDiv.style.width = w + '%';
                infoTextDiv.style.opacity = o; 
                infoTextDiv.style.fontSize = fsize + 'px';
                infoTextDiv.style.borderStyle = 'double';
                infoTextDiv.innerHTML = "<ul><li>Filler Text 2</li></ul>";

            }
        }

    }
}