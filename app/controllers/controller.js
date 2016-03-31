function Controller(cinema, view){
	var cinemaButtons = document.querySelector('.cinema__buttons');
		freeSeats = document.querySelector(".cinema__freeSeats");
		cinemaSeats  = document.querySelector(".cinema__seats");
// regards to button, some action starts
	cinemaButtons.onclick = function(event){
			var target = event.target;
			switch(target.innerHTML){
				case "Info about cinema": cinema.showCinemaInfo();
									break;			
				case "Create cinema":
							cinema.createSeats();
							cinemaButtons.children[1].style.display = "inline-block";		
							freeSeats.style.display = "block";
							setFreeSeats();

							
				case "Booking current cinema": cinemaSeats.style.display = "block";	
												hideButtons();		
			}
	};
// Events of table: button 'Close' or booking/free the seats
	cinemaSeats.onclick = function(event){
		var target = event.target;
		switch(target.tagName){

			case "BUTTON": 
					cinemaSeats.style.display = "none";	
					showButtons();															
					break;

			case "TD": 	
					if(target.classList.length === 1){
						target.classList.toggle("free");		
						target.classList.toggle("booked");
					}
						setSeat(target);
						setFreeSeats();	
		}
	};

	function hideButtons(){
		cinemaButtons.children[0].style.display = "none";													
		cinemaButtons.children[1].style.display = "none";		
	}

	function showButtons(){
		cinemaButtons.children[0].style.display = "inline-block";													
		cinemaButtons.children[1].style.display = "inline-block";		
	}
// counting free seats at the cinema 
	function setFreeSeats(){
			freeSeats.children[0].innerHTML = cinema.getFreeSeats();
	}
// mark the seat booked or free	
	function setSeat(target){
		if(target.classList.length === 1){
			var j = Number(target.innerHTML);
			var i = parseInt(target.parentElement.children[0].innerHTML);
			if(target.classList.contains("booked")){
				cinema.arraySeats[i-1][j] = 1;
			}else{
				cinema.arraySeats[i-1][j] = 0;
			}
		}	
	}	
}