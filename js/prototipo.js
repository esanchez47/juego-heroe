function Chat(mensaje){
	this.mensaje = mensaje;
	// this.guardar = function(){
	// 	console.log('Metodo clase'); // aqui se definio. Si no estuviera aqui, se buscaria el metodo guardar en prototype
	}


Chat.prototype.guardar = function(){
	// console.log('Metodo prototype');
	// chat.__proto__.guardar(); // algunos navegadores no lo leen, por eso se usa esa instancia
	// chat.prototype.guardar(); 

	// aqui me conecto con el servidor y le entrego this.
	
	console.log("guardando", this);
}

var chat = new Chat('Hola Mundo');
chat.guardar(); // va a correr el definido en la clase (POR ESO, ESTA DEFINIDO) 
				// Si no estuviera, correría el prototype.

var chat2 = new Chat('Hola denuevo');
chat2.guardar();