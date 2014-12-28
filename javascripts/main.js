console.log('This would be the main JS file.');

var list = ["Лена", "Андрей", "Саша", "Женя", "Паша"];

var item = list[Math.floor(Math.random()*items.length)];

function choise(){
	var position = Math.floor(Math.random()*items.length)];
	alert(list[position]);
	array.splice(position, 1);
}
/*
function calculateFunction(){
	document.getElementById("energySum").innerHTML = calculateEnergy();
	document.getElementById("waterSum").innerHTML = calculateWater();
	document.getElementById("sewageSum").innerHTML = calculateSewage();
	document.getElementById("gasSum").innerHTML = calculateGas();
	document.getElementById("houseSum").innerHTML = calculateHouse();	
	document.getElementById("heatSum").innerHTML = calculateHeat();
	document.getElementById("litterSum").innerHTML = calculateLitter();
	document.getElementById("total").innerHTML = (parseFloat(calculateEnergy())+parseFloat(calculateWater())+parseFloat(calculateSewage())+parseFloat(calculateGas())+parseFloat(calculateHouse())+parseFloat(calculateHeat())+parseFloat(calculateLitter())).toFixed(2);
	return;
}

function calculateCounter(first,last,difference){
	if (parseFloat(last) < parseFloat(first)){
		alert("перепутаны колонки начальных и конечных показаний счетчиков");
		return 0;
		}
	return (parseFloat(difference)*(parseFloat(last)-parseFloat(first))).toFixed(2);
 }
 
 function calculateEnergy(){
	var firstVal = document.getElementById("energyStart").value;
	var secondVal = document.getElementById("energyInterm").value;
	var tariffEn = document.getElementById("energyTariff").value;
	console.log(firstVal,secondVal,tariffEn);	
	return calculateCounter(firstVal,secondVal,tariffEn);
	}

 function calculateWater(){
	var firstVal = document.getElementById("waterStart").value;
	var secondVal = document.getElementById("waterInterm").value;
	var tariffEn = document.getElementById("waterTariff").value;
	console.log(firstVal,secondVal,tariffEn);	
	return calculateCounter(firstVal,secondVal,tariffEn);
	}
function calculateSewage(){
	var firstVal = document.getElementById("sewageStart").value;
	var secondVal = document.getElementById("sewageInterm").value;
	var tariffEn = document.getElementById("sewageTariff").value;
	console.log(firstVal,secondVal,tariffEn);	
	return calculateCounter(firstVal,secondVal,tariffEn);
	}
function calculateGas(){
	var firstVal = document.getElementById("gasStart").value;
	var secondVal = document.getElementById("gasInterm").value;
	var tariffEn = document.getElementById("gasTariff").value;
	console.log(firstVal,secondVal,tariffEn);	
	return calculateCounter(firstVal,secondVal,tariffEn);
	}
function calculateHouse(){
	return parseFloat(document.getElementById("houseTariff").value);
	}
function calculateHeat(){
	return parseFloat(document.getElementById("heatTariff").value);
	}
function calculateLitter(){
	return parseFloat(document.getElementById("litterTariff").value);
	}
*/
