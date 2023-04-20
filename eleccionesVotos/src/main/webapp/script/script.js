function enviarDatos(form){
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

function ordenar(){
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

