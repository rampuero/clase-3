var auto = {
	color: 'rojo',
	marca: 'nissan',
	modelo: 'supre',
	motor: {
			cc:'1.6',
			combustible:'bencina'
	},
	puertas:4,
	year: 2018,
	transmicion:'mecanica',
	permisoCirculacion: true,
	encendido:false,
	frenar: function(){
		return 'el auto freno';
	},	
	encender: function(){
		this.encendido = true;
	},	
}

console.log(auto);
console.log(auto.marca);
console.log(auto.encendido);
auto.encender();
console.log(auto.encendido);

