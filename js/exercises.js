
function loadData(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
}

function makeChart(films)
{
  console.log(films);
  films.forEach(function(film){
    console.log(film.title);
  });

  const canvasDiv = document.querySelector("#myCanvas");
  const ctx = canvasDiv.getContext("2d");

  //add your code for drawing here

}//end of makeChart function, do not remove

function init(){
  loadData("./data/films.json", makeChart);
}

window.addEventListener("load", init);



//1. Have a look at 
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API 
// http://lordoc.com/sheet/canvas/ 
// https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html 
// These provide a basic introduction to the <canvas> element.
// See if you can draw a rectangle and some lines using the canvas. 
// The key properties and methods you will need are:
  // fillStyle
  // fillRect
  // strokeStyle
  // lineWidth
  // beginPath()
  // moveTo()
  // lineTo()
  // stroke()
//Write this code in the makeChart function.

// 2. Now try and draw a bar chart that shows the duration of each film from the films array. 
// Try to build this up in stages e.g.
// a) Can you loop over the film objects and display the duration of each film in the console.
// b) Can you modify this loop so that a rectangle is drawn for each film
// C) Can you use the film duration to set the height of each rectangle.
// c) Can you draw simple axes for the chart.
// d) Can you add some text to the chart to label the axes.

// 3. It would be much easier if we simply used a library to build the chart.
// a) Comment out your drawing code.
// b) Have a look at https://www.chartjs.org/docs/latest/. 
    // If you look in the HTML page there is alreay a link to the CDN for the library. 
    // Copy the example code from https://www.chartjs.org/docs/latest/getting-started/ and test it works.
// c) Can you change this example so that it displays information about the durations of different films. 
    //To start with hard code the values into the Chart.js code.

// 4. Now try and modify this example so that it uses the loaded films data 
// The chartjs library expects data to be flat arrays (not an array of objects).
// Use use the .map() method to generate an array of film durations and a separate array of film titles.
// Here are some links to help:
//    https://github.com/CHT2531/functional-programming/blob/master/notes.md#the-arraymap-method
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Test the map() works using some simple console.log statements
// Finally use this data so that the chartjs bar chart displays a list of films and their durations.
