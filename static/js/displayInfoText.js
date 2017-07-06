

var isACCClicked = false;
var isFillerProject1 = false;
var isFillerProject2 = false;

class ProjectData {
  constructor() {
    this.toggle = false;
    this.id = "";
    this.show_html = "";
    this.hide_html = "";
  }
}

var ACC_Data = new ProjectData();
ACC_Data.toggle = false;
ACC_Data.id = "#ACC";
ACC_Data.show_html = "<div style='font-weight: bold; text-align: center; font-size: 20px;'>Project Details</div> \
        <div> \
          <br> \
          <ul> \
            <li>Implemented club page with PHP, Javascript, CSS, HTML</li> \
            <li>Worked in collaborative team with 10 fellow students</li></ul></div>";
ACC_Data.hide_html = "<a class='black' href='http://aggiecodingclub.com/' target='_blank'>Aggie Coding Club <br>Website</a>";

$("#acc-info").click(function(){
  toggle_info(ACC_Data);
});

function toggle_info(data) {
  console.log("Hello World");
  if(!data.toggle) {
    console.log("Showing");
      $(data.id).css({
        "top": "-20px",
        "left": "0px",
        "height": "100%",
        "width": "100%",
        "backgroundColor": "grey",
        "opacity": "0.85",
        "fontSize": "16px"
      });
      $(data.id).html(data.show_html);
      data.toggle = true;
  }
  else {
      $(data.id).css({
        "top": "100px",
        "left": "auto",
        "height": "auto",
        "width": "auto",
        "backgroundColor": "transparent",
        "opacity": "auto",
        "fontSize": "24px"
      });
      $(data.id).html(data.hide_html);

      data.toggle = false;
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
