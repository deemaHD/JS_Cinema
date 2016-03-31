function View(cinema){
// create the table of seats	
	cinema.modelChangeSubject.addObserver(function(){
		var cinemaTable = document.querySelector('.cinema__table');
		var arrayTableLength = cinemaTable.children.length; 
			if(arrayTableLength > 1){
				for( var i = 1; i < arrayTableLength; i++){
					cinemaTable.removeChild(cinemaTable.lastChild);
				}
			}
			var fragment  = document.createDocumentFragment();
			for(var i = 0; i < cinema.rows; i++){
				var tr = document.createElement("tr");
				for(var j = 0; j < cinema.seats; j++){
					var td = document.createElement("td");
					td.classList.add("free");
					if(j === 0) {
						td.innerHTML = (i+1) + " row";
					}else{
						td.innerHTML = j;
					}
						tr.appendChild(td);
				}
				fragment.appendChild(tr);
			}
			cinemaTable.appendChild(fragment);
//random 20 booked seats
			for(var i = 0; i < 20; i++){
				var row  = Math.floor(Math.random() * (cinema.rows - 1) + 1);
				var seat = Math.floor(Math.random() * (cinema.seats - 1) + 1);
				var bookedSeat = cinemaTable.rows[row].cells[seat];
				if(bookedSeat.classList.contains("booked")){
					i--;
				}else{
					bookedSeat.classList.add("booked");	
					bookedSeat.classList.remove("free");	
					cinema.arraySeats[row][seat] = 1;
				}
			}
	});
}	