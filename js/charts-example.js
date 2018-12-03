const durations=[117,124,100,115]

const myCanvasElement=document.getElementById("myCanvas");
const drawingContext=myCanvasElement.getContext("2d");
//drawingContext.fillRect(50, 25, 150, 100);

drawingContext.beginPath();
drawingContext.lineWidth=2;
drawingContext.moveTo(20,300);

drawingContext.lineTo(400,300);
drawingContext.stroke();

let xPos = 30;
let yPos = 100; 



durations.forEach(function(duration){
    drawingContext.fillRect(xPos, 300-duration, 30, duration);
     xPos+=40
})




//creating an array of film objects, really these would come from Ajax
/*
class Film
{
	constructor(id,title, year,duration){
		this.id = id;
		this.title = title;
		this.year = year;
		this.duration = duration;
	}
}
let films=[]
films.push(new Film(1,"Get Out","2017",117));
films.push(new Film(2,"Jaws","1975",124));
films.push(new Film(3,"Winter's Bone","2010",100));
films.push(new Film(4,"The Incredibles","2004",115));

//need to get flat arrays of values for labels and data
const labels = films.map(function(film){
	return film.title;
})
const data = films.map(function(film){
	return film.duration;
})


const chartDiv = document.querySelector("#myChart").getContext("2d");


var myChart = new Chart(chartDiv, 
{
    type: 'bar',
    data: {
        labels:labels,
        datasets: [{
            label: 'Duration (mins)',
            data: data,
            backgroundColor:'rgba(5,41,98,0.7)',
            borderWidth: 1
        }]
    },
    options: {
    	responsive:false,
    	scales: {
            yAxes: [
            	{
                	ticks: 
                	{
                    	beginAtZero:true
                	},
                	scaleLabel: 
                	{
			        	display: true,
			        	labelString: 'Duration'
			     	}
            	}
            ],
            xAxes: [
            	{
            		scaleLabel: 
            		{
			        	display: true,
			        	labelString: 'Film'
			     	}
            	}
            ]
        }
    }
});
*/

/*
var ctx = document.getElementById('durationChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});
*/

//Have a look at https://www.chartjs.org/docs/latest/getting-started/
//Change the colours, change the data, change the type of chart 

//Work with the canvas using plain js
//Create a basic chart with hard coded data
//Change the properties e.g. colours
//Experiment with map
//Use map to generate labels and data