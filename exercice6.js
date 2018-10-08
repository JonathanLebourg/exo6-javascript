
// on demande les nombres
function division(){

var firstNumber = prompt('Premier nombre ?');
var secondNumber = prompt('Deuxieme nombre ?');
var rest = parseInt(firstNumber) % parseInt(secondNumber);

if (isNaN(firstNumber)||isNaN(secondNumber)) {
		alert('problème de saisie')}
else(alert("Le reste de la division de ces deux nombres est " + rest));
}
