

function Monstruo(salud, ataque, raza){
	this.salud = salud;
	this.ataque = ataque;
	this.raza = raza;
}

Monstruo.prototype.ataca = function(heroe){ // se le pasa la instancia de heroe
	heroe.salud = heroe.salud - this.ataque;
	if (heroe.salud <= 0){
		console.log('El heroe murió!');
	};
}

function Heroe(salud, ataque, raza){
	this.salud = salud;
	this.ataque = ataque;
	this.raza = raza;
	this.experiencia = 0;
	this.nivel = 1;
}

Heroe.prototype.ataca = function (monstruo){
	monstruo.salud = monstruo.salud - this.ataque;
	if (monstruo.salud <= 0){
		console.log('El Heroe mató al monstruo!');
		this.experiencia += 500;

		if (this.experiencia >= 1000){
			this.nivel = this.nivel + 1; // sube nivel
			this.experiencia = this.experiencia - 1000; // al subir den ivel, su exp baja 1000, es decir, vuelve a 0
			this.nivelUp();
		}
	};
}

function Pocion(){
	this.recupera = recupera;
}

Heroe.prototype.saludUp = function(pocion){
	this.salud = this.salud + pocion.recupera;
}

Heroe.prototype.nivelUp = function(){
	this.ataque = this.ataque * this.nivel;
	this.salud = 100 * this.nivel;
}


// instancias 
var monstruo = new Monstruo(100, 5, 'Orco'); // pasar parametros salud, ataque y orco
var monstruo1 = new Monstruo(100, 5, 'Orco'); // pasar parametros salud, ataque y orco
var heroe = new Heroe(100, 10, 'Humano');


console.log('El monstruo ' + monstruo.raza + ' ha tomado al heroe por sorpresa!')
monstruo.ataca(heroe);

while (heroe.salud > 0 && monstruo.salud > 0) /* && (monstruo.salud > 0 || monstruo1.salud > 0) hace que el heroe siga peleando aunq haya uno muerto)*/ {
	monstruo.ataca(heroe);
	heroe.ataca(monstruo);

	monstruo1.ataca(heroe);
		if (heroe.salud > 0){
			heroe.ataca(monstruo);
		};

		if (heroe.salud < 20){
			var pocion = new Pocion(30);
			heroe.saludUp(pocion); //le paso la pocion definida
		}

}

console.log(heroe);


