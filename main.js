

var cars = [
	{	
	model:'VW Polo',
	color:'grey',
	gearbox:'Manual',
	price:150,
		src:"./images/polo.jpg" 	
     },
	 {
    model:'kia',
	color:'red',
	gearbox:'Automatic',
	price:130,
		src:"./images/kia.jpg" 	
	 },
	 {
	model:'Mercedes',
	color:'White',
	gearbox:'Automatic',
	price:230,
	src:"./images/mercedes.jpg" 	 	
	 },
	 {
	model:'Ford',
	color:'green',
	gearbox:'Manual',
	price:170,
	src:"./images/ford.jpg" 	
	 }
]

function displayCar(car){

var $car=$(`<div><p> model ${car.model}</p> <img src=${car.src} /> </div>`)
$('body').append($car)
	
}

	
	

	
	
	


   




  