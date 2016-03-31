// model Cinema
function Cinema (rows, seats){
	this._rows = rows;
	this._seats = seats;
	this._arraySeats = [];
	this.modelChangeSubject = makeObservableSubject();
}

Cinema.prototype = {
		set rows(rows){
				if(rows < 1 || rows > 10){
					this._rows = 5;
				}else{
					this._rows = rows;
				}	
			},
		get rows(){
			return this._rows;
		},
		set seats(seats){
				if(seats < 1 || seats > 20){
					this._seats = 10;
				}else{
					this._seats = seats;
				}	
		},
		get seats(){
			return this._seats;
		},
		get arraySeats(){
			return this._arraySeats;
		},		
// returns string with free seats information	
		getFreeSeats:function(){
			var free = 0;
			var booked = 0;
			for(var i = 0; i < this.arraySeats.length; i++){
				for(var j = 1; j < this.arraySeats[i].length; j++){
					if(this.arraySeats[i][j]  === 0) {
						free++;
					}else{
						booked++;
					}
				} 
			}
			return "Free seats: " + free + "\nBooked seats : " + booked;		
		},
// creats the rows and seats regards to the input value
		createSeats : function(){
			this.arraySeats.length = this.rows;
			for(var i = 0; i < this.rows; i++){
				this.arraySeats[i] = [];
				this.arraySeats[i].length = this.seats;
				for(var j = 1; j < this.seats; j++){
					this.arraySeats[i][j] = 0;
				}
			}
			this.modelChangeSubject.notifyObserver();
		},
// show the ciname information with Ajax request
		showCinemaInfo: function(){
				var xhr = new XMLHttpRequest();
				xhr.open("GET","cinema.json",true);
				xhr.send();
				xhr.onreadystatechange = function(){
					if (xhr.readyState!=4) return;

					if (xhr.status != 200){
						alert(xhr.status + ":" + xhr.statusText);
					}else{
						alert(xhr.responseText);
					}
				};
		} 

};
// all observers get refreshing, when smth is chacnged in model
// this function returns the object
function makeObservableSubject(){
	var observers = [];

	var addObserver = function(func){
		if (typeof func !== 'function'){
			throw new Error('observer must be a function');		
		}
		for(var i = 0; i < observers.length; i++){
			if (func === observers[i]){
				throw new Error("Such obserever is already exist");
			}
		}
		observers.push(func);
	};

	var removeObserver = function(func){
		for(var i = 0; i < observers.length; i++){
			if(observers[i] === func){
				observers.splice(i, 1);
				return;
			}
		}
	};	

	var notifyObserver = function(){
		var observerSnapshot = observers.slice(0);
		for(var i = 0; i < observers.length; i++){
			observers[i]();
		}
	};
	return {
		addObserver:addObserver,
		removeObserver:removeObserver,
		notifyObserver:notifyObserver
	};
}
