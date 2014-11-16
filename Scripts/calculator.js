function calculateFunction(){
	document.getElementById("energySum").innerHTML = calculateEnergy();
	document.getElementById("waterSum").innerHTML = calculateWater();
	document.getElementById("sewageSum").innerHTML = calculateSewage();
	document.getElementById("gasSum").innerHTML = calculateGas();
	document.getElementById("houseSum").innerHTML = calculateHouse();	
	document.getElementById("heatSum").innerHTML = calculateHeat();
	document.getElementById("total").innerHTML = calculateEnergy()+calculateWater()+calculateSewage()+calculateGas()+calculateHouse()+calculateHeat();
}

function calculateCounter(first,last,difference){
	if (parseFloat(last) < parseFloat(first)){
		alert("перепутаны колонки начальных и конечных показаний счетчиков");
		return 0;
		}
	return parseFloat(difference)*(parseFloat(last)-parseFloat(first))
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