function enviarDatosG(form){
	var nombre=form.partido.value;
	if(nombre=="PP"){
		let contador=Number(localStorage.getItem("PP"));
		localStorage.setItem('PP', contador+1);
		}
	if(nombre=="PSOE"){
		let contador=Number(localStorage.getItem("PSOE"));
		localStorage.setItem('PSOE', contador+1);
		}
	if(nombre=="Podemos"){
		let contador=Number(localStorage.getItem("Podemos"));
		localStorage.setItem('Podemos', contador+1);
		}
	if(nombre=="VOX"){
		let contador=Number(localStorage.getItem("VOX"));
		localStorage.setItem('VOX', contador+1);
		}
	if(nombre=="Otros"){
		let contador=Number(localStorage.getItem("Otros"));
		localStorage.setItem('Otros', contador+1);
		}
}

function enviarDatosM(form){
	var nombre=form.partido.value;
	if(nombre=="PPDos"){
		let contador=Number(localStorage.getItem("PPDos"));
		localStorage.setItem('PPDos', contador+1);
		}
	if(nombre=="PSOEDos"){
		let contador=Number(localStorage.getItem("PSOEDos"));
		localStorage.setItem('PSOEDos', contador+1);
		}
	if(nombre=="Ciudadanos"){
		let contador=Number(localStorage.getItem("Ciudadanos"));
		localStorage.setItem('Ciudadanos', contador+1);
		}
	if(nombre=="VOXDos"){
		let contador=Number(localStorage.getItem("VOXDos"));
		localStorage.setItem('VOXDos', contador+1);
		}
	if(nombre=="Adelante"){
		let contador=Number(localStorage.getItem("Adelante"));
		localStorage.setItem('Adelante', contador+1);
		}
	if(nombre=="IU_Andalucia"){
		let contador=Number(localStorage.getItem("IU_Andalucia"));
		localStorage.setItem('IU_Andalucia', contador+1);
		}
	if(nombre=="OtrosDos"){
		let contador=Number(localStorage.getItem("Otrosdos"));
		localStorage.setItem('OtrosDos', contador+1);
		}
}


function ordenarGenerales(){
	var ordenar = new Array(2);
	ordenar[0] = new Array(2);
	ordenar[1] = new Array(2);
	ordenar[2] = new Array(2);
	ordenar[3] = new Array(2);
	ordenar[4] = new Array(2);
	
	ordenar[0][1]="VOX";
	ordenar[0][0]=Number(localStorage.getItem("VOX"));
	ordenar[1][1]="PP";
	ordenar[1][0]=Number(localStorage.getItem("PP"));
	ordenar[2][1]="PSOE";
	ordenar[2][0]=Number(localStorage.getItem("PSOE"));
	ordenar[3][1]="Podemos";
	ordenar[3][0]=Number(localStorage.getItem("Podemos"));
	ordenar[4][1]="Otros";
	ordenar[4][0]=Number(localStorage.getItem("Otros"));
	var totalVotos=ordenar[0][0]+ordenar[1][0]+ordenar[2][0]+ordenar[3][0]+ordenar[4][0];
	ordenar.sort((a, b) => {
  if(a == b) {
    return 0; 
  }
  if(a > b) {
    return -1;
  }
  return 1;
});

for(let i=0;i<ordenar.length;i++){
	for(let e=0;e<ordenar[i].length;e++){
		console.log(ordenar[i][e]);
	}
	console.log(Number((ordenar[i][0]/totalVotos)*100)+"%");
}	
}

function ordenarMunicipales(){
	var ordenar = new Array(2);
	ordenar[0] = new Array(2);
	ordenar[1] = new Array(2);
	ordenar[2] = new Array(2);
	ordenar[3] = new Array(2);
	ordenar[4] = new Array(2);
	ordenar[5] = new Array(2);
	ordenar[6] = new Array(2);
	
	ordenar[0][1]="VOX";
	ordenar[0][0]=Number(localStorage.getItem("VOXDos"));
	ordenar[1][1]="PP";
	ordenar[1][0]=Number(localStorage.getItem("PPDos"));
	ordenar[2][1]="PSOE";
	ordenar[2][0]=Number(localStorage.getItem("PSOEDos"));
	ordenar[3][1]="Ciudadanos";
	ordenar[3][0]=Number(localStorage.getItem("Ciudadanos"));
	ordenar[4][1]="Otros";
	ordenar[4][0]=Number(localStorage.getItem("OtrosDos"));
	ordenar[5][1]="Adelante";
	ordenar[5][0]=Number(localStorage.getItem("Adelante"));
	ordenar[6][1]="IU Andalucia";
	ordenar[6][0]=Number(localStorage.getItem("IU_Andalucia"));
	var totalVotos=ordenar[0][0]+ordenar[1][0]+ordenar[2][0]+ordenar[3][0]+ordenar[4][0]+ordenar[5][0]+ordenar[6][0];
	ordenar.sort((a, b) => {
  if(a == b) {
    return 0; 
  }
  if(a > b) {
    return -1;
  }
  return 1;
});

for(let i=0;i<ordenar.length;i++){
	for(let e=0;e<ordenar[i].length;e++){
		console.log(ordenar[i][e]);
	}
	console.log(Number((ordenar[i][0]/totalVotos)*100)+"%");
}	
}

