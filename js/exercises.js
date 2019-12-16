let films;
let canvasDiv;
function doAjax(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
}

function makeChart(data){
  films = data;
  console.log(films);
  //add your code for drawing in here
  const ctx = canvasDiv.getContext("2d");
  // //x axis
  // ctx.beginPath();
  // ctx.moveTo(40,360);
  // ctx.lineTo(560,360);
  // ctx.stroke();
  // //y axis
  // ctx.beginPath();
  // ctx.moveTo(60,360);
  // ctx.lineTo(60,40);
  // ctx.stroke();
  // ctx.fillText('Duration', 10, 180);
  // //draw the bars
  // ctx.textAlign="center";
  // let xPos = 80;
  // films.forEach(function(film){
  //   const rectHeight = film.duration*2
  //   ctx.strokeRect(xPos,360,50,-rectHeight)
  //   ctx.fillText(film.title, xPos+20, 375);
  //   xPos = xPos+120;
  // })
  const titles = films.map(function(film){
    return film.title;
  })

  const durations = films.map(function(film){
    return film.duration;
  })

const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: titles,
        datasets: [{
            label: 'Film Durations',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: durations
        }]
    },

    // Configuration options go here
    options: {
      responsive:false,
      scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


}//end of makeChart function

function init(){
  canvasDiv = document.querySelector("#myCanvas");
  doAjax("./data/films.json",makeChart);
}
init()
/*
1. Have a look at https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API it provides a basic introduction to the <canvas> element.
See if you can draw a rectangle and some lines using the canvas. Write this code in the makeChart function.
*/

/*
2. Have a think about how you can draw a bar chart that shows the duration of each film from the films array. Try to build this up in stages e.g.
a) Can you draw simple axis for the chart.
b) Can you loop over the film objects and display the duration of each film in the console.
C) Can you modify this loop so that a rectangle is drawn for each film, use the film duration to set the height of the rectangle.
d) Can you add some text to the chart to label the axis.
*/

/*
3. It would be much easier if we simply used a library to build the chart.
a) Comment out your drawing code.
b) Have a look at https://www.chartjs.org/docs/latest/getting-started/. Can you get this example to work. At the moment, don't worry about using the film data
c) Can you modify this example so that it displays a bar chart
*/

/*
4. The chartjs library expects data to be flat arrays (not an array of objects).
Have a look at the .map() method to see if you can generate an array of film durations and an array of film titles.
here are some links to help:
    https://github.com/CHT2531/functional-programming/blob/master/notes.md#the-arraymap-method
    https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

a) Test the map() works using some simple console.log statements
b) Think about how you can use this data so that the chartjs bar chart displays a list of films and their durations.
*/
