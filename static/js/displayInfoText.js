

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
        infoTextDiv.style.top = "-20px";
        infoTextDiv.style.left = "0px";
        infoTextDiv.style.height = "100%";
        infoTextDiv.style.width = "100%";
        infoTextDiv.style.backgroundColor = "grey";
        infoTextDiv.style.opacity = "0.85";
        infoTextDiv.style.fontSize = "16px";
        infoTextDiv.innerHTML = "<div style='font-weight: bold; text-align: center; font-size: 20px;'>Project Details</div> <div><br><ul> <li>Filler Text</li> </ul></div>"

        isFillerProject1 = true;
    }
    else {
        var infoTextDiv = document.getElementById("FillerProject1");
        infoTextDiv.style.top = "100px";
        infoTextDiv.style.left = "auto";
        infoTextDiv.style.height = "auto";
        infoTextDiv.style.width = "auto";
        infoTextDiv.style.backgroundColor = "transparent";
        infoTextDiv.style.opacity = "1";
        infoTextDiv.style.fontSize = "24px";
        infoTextDiv.innerHTML = "<a class='black' href='http://aggiecodingclub.com/' target='_blank'>Filler Project 1</a>";
        
        isFillerProject1 = false;
    }
}

function displayFillerProject2Info() {
    if(isFillerProject2 == false) {
        var infoTextDiv = document.getElementById("FillerProject2");
        infoTextDiv.style.top = "-20px";
        infoTextDiv.style.left = "0px";
        infoTextDiv.style.height = "100%";
        infoTextDiv.style.width = "100%";
        infoTextDiv.style.backgroundColor = "grey";
        infoTextDiv.style.opacity = "0.85";
        infoTextDiv.style.fontSize = "16px";
        infoTextDiv.innerHTML = "<div style='font-weight: bold; text-align: center; font-size: 20px;'>Project Details</div> <div><br><ul> <li>Filler Text</li> </ul></div>"

        isFillerProject2 = true;
    }
    else {
        var infoTextDiv = document.getElementById("FillerProject2");
        infoTextDiv.style.top = "100px";
        infoTextDiv.style.left = "auto";
        infoTextDiv.style.height = "auto";
        infoTextDiv.style.width = "auto";
        infoTextDiv.style.backgroundColor = "transparent";
        infoTextDiv.style.opacity = "1";
        infoTextDiv.style.fontSize = "24px";
        infoTextDiv.innerHTML = "<a class='white' href='http://aggiecodingclub.com/' target='_blank'>Filler Project 2</a>";
        
        isFillerProject2 = false;
    }
}