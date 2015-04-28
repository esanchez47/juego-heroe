// function Chat(mensaje){
// 	this.mensaje = mensaje;
// 	// this.guardar = function(){
// 	// 	console.log('Metodo clase'); // aqui se definio. Si no estuviera aqui, se buscaria el metodo guardar en prototype
// 	}


// Chat.prototype.guardar = function(){
// 	// console.log('Metodo prototype');
// 	// chat.__proto__.guardar(); // algunos navegadores no lo leen, por eso se usa esa instancia
// 	// chat.prototype.guardar(); 

// 	// aqui me conecto con el servidor y le entrego this.
	
// 	console.log("guardando", this);
// }

// var chat = new Chat('Hola Mundo');
// chat.guardar(); // va a correr el definido en la clase (POR ESO, ESTA DEFINIDO) 
// 				// Si no estuviera, correría el prototype.

// var chat2 = new Chat('Hola denuevo');
// chat2.guardar();

/* crear una clase Humano, debe tener como propiedad a que velocidad corre
(lento, normal o rapido).
crear un metodo de prototipo que muestre a que velocidad corre.
generar tres instancias que reciban como parámetros la velocidad a la que corre.

luego mostrar a que velocidad corre cada instancia. */


					// function Humano(velocidad){
					// 	this.velocidad = velocidad;
					// }

					// Humano.prototype.mostrarVelocidad = function (){
					// 	console.log(this.velocidad);
					// }


					// var humano1 = new Humano('lento');

					// var humano2 = new Humano('normal');

					// var humano3 = new Humano('rápido');

					// humano1.mostrarVelocidad();
					// humano2.mostrarVelocidad();
					// humano3.mostrarVelocidad();


// crear una clase deportista que reciba como parámetro su especialidad
// salto con garrocha, maratonista, levantador de pesas, etc.
// crear un metodo de prototipo que imprima "El deportista 
// está haciendo la especialidad de :"nombre especialidad".
// crear otro metodo de prototipo que reciba otra especialidad y que intente
// realizarla. Si es la misma especialidad que realiza, realizar la especialidad,
// si no, indicar una alerta y realizar la especialidad de todos modos.


function Deportista(especialidad){
	this.especialidad = especialidad;
}

Deportista.prototype.mostrarEspecialidad = function(){
	console.log("El deportista está haciendo la especialidad de" + ' ' + this.especialidad);
	// creado el metodo de prototipo que imprime la frase + especialidad.
}

Deportista.prototype.otraEspecialidad = function(especialiad2){
	this.especialidad2 = 'Tenista';
	if (this.especialidad2 == this.especialidad){
		console.log('Realizo mi especialidad: ' + this.especialidad)
	}

	else{
		alert('No es mi especialidad, pero la realizo de todos modos.')
	}
}

var deportista1 = new Deportista('Maratonista');
var deportista2 = new Deportista('Ciclicta');
var deportista3 = new Deportista('Futbolista');
var deportista4 = new Deportista('Futbolista');
var deportista5 = new Deportista('Tenista');


deportista1.mostrarEspecialidad();
deportista2.mostrarEspecialidad();
deportista3.mostrarEspecialidad();
deportista4.otraEspecialidad();
deportista5.otraEspecialidad();


/* crear una clase de Monstruo que tenga como parámetros, salud, poder de ataque y raza.
Crear un método de prototipo que reciba una instancia de Heroe y que este método 
le descuente la energia al heroe.

Si la energia del heroe llega por debajo de 0, debe indicar que el heroe se murió.

Crear una clase de Heroe que tenga como parámetros salud poder de ataque y raza.
Crear un metodo de prototipo que reciba una instancia de Monstruo y que este metodo
le descuente energia al monstruo.

Si la energia el monstruo llega por debajo de 0, debe indicar que el heroe mató
al monstruo.

A la clase de Heroe, agregar la propiedad de experiencia.
Cada vez que el heroe mate a un monstruo, debe aumentar su experiencia. Si la experiencia
que tiene el heroe es mayor que un múltiplo de 1000, el heroe debe subir de nivel y multiplicar
su ataque y salud por el nivel del heroe.

Crear otro metodo de prototipo que reciba un una instancia de la clase poción y esta
aumente la cantidad de salud del heroe.

Crear una clase Poción que reciba como parametro la cantidad de energia que recupera.

*/

