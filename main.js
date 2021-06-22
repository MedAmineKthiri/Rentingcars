

var cars = [
	{	
	model:'Volkswagen',
	color:'grey',
	gearbox:'Manual',
	price:150,
		src:"./images/polo.jpg" 	
     },
	 {
    model:'Kia',
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


$( "a" ).click(function( event ) {
 for(var i=0;i<cars.length;i++){
 	if (cars[i].model === event.target.id){
 		var $car=$(`<div><p> model ${cars[i].model}</p> <img src=${cars[i].src} /> </div>`)
 		
 	}
 	$('#car').html($car)

 }
  // $( "<div>" )
  //   .append( "default " + event.type + " prevented" )
  //   .appendTo( "#log" );
});

	

	
	
	


   




  