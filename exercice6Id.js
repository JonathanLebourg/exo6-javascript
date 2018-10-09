function division(){
//definition des variables
var firstNumber = document.getElementById('firstNumber').value;
var secondNumber = document.getElementById('secondNumber').value;
var operation = firstNumber + secondNumber;
var rest = parseInt(firstNumber) % parseInt(secondNumber);
//que les chiffres
var regex= /^[0-9]+$/;

if (!regex.test(operation)||operation==null){
    alert("Problème de saisie");}
else(alert("Le reste de la division de ces deux nombres est " + rest));
}
