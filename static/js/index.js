


// document.onmousemove = getMouseXY;
//
//
//
//
// // Temporary variables to hold mouse x-y pos.s
// var tempX = 0;
// var tempY = 0;
//
// var objectArray = new Array();
//
// fillObjectArray();
// positionDivs();
//
// function fillObjectArray() {
//
//   var kyleDiv = document.getElementById("kyle-field");
// 	var kyleX = $(window).width()/4; //position div from half width of the page
// 	var kyleY = 33;
// 	var kyleFactor = 0.05; //parallax shift factor, the bigger the value, the more it shift for parallax movement
// 	var kyleArray = new Array();
// 	kyleArray.push(kyleDiv, kyleX, kyleY, kyleFactor);
// 	objectArray.push(kyleArray);
// }
//
// function getMouseXY(e) {
//   tempX = e.pageX
//   tempY = e.pageY
//   // catch possible negative values in NS4
//   if (tempX < 0){tempX = 0}
//   if (tempY < 0){tempY = 0}
//
//   moveDiv(tempX);
//
//   return true
// }
//
// function moveDiv(tempX)
// {
// 	for (var i=0;i<objectArray.length;i++)
// 	{
// 		var yourDivPositionX = objectArray[i][3] * (0.5 * $(window).width() - tempX) + objectArray[i][1];
// 		objectArray[i][0].style.left = yourDivPositionX + 'px';
// 	}
// }
//
// function positionDivs()
// {
// 	for (var i=0;i<objectArray.length;i++)
// 	{
// 		objectArray[i][0].style.left = objectArray[i][1] + "px";
// 		objectArray[i][0].style.top = objectArray[i][2] + "px";
// 	}
// }
