
class Film
{
    constructor(title, year){
        this.title = title;
        this.year = year;
    }
}
let films=[]
films.push(new Film("Get Out","2017",117));
films.push(new Film("Jaws","1975",124));
films.push(new Film("Winter's Bone","2010",100));
films.push(new Film("The Incredibles","2004",115));

/*
1. Have a look at https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API it provides a basic introduction to the <canvas> element. 
See if you can draw a rectangle and some lines using the canvas.
*/

/*
2. Have a think about how you can draw a bar chart that shows the duration of each film from the films array. Try to build this up in stages e.g.
a) Can you draw simple axis for the chart. 
b) Can you loop over the film objects and display the duration of each film in the console.
C) Can you modify this loop so that a rectangle is drawn in for each film, use the film duration to set the height of the rectangle.
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
    https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464

a) Test the map() works using some simple console.log statements
b) Think about how you can use this data so that the chartjs bar chart displays a list of films and their durations.
*/
