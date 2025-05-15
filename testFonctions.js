let prez0 = 'Hello, je suis Yoan.';

// // Math.random() génère un nb décimal aléatoire. 
document.getElementById('p1').innerHTML = Math.random();

// // String.replace() remplace une expression par une autre à l'intérieur d'une chaine de caractères. 
let prez1 = prez0.replace('Yoan', 'Maverick');
document.getElementById('p2').innerHTML = prez1;

// * ______________________________________________________
// // Déclaration de deux fonctions.

// // Math.random() * 100. 
function aleatoire() {
    return Math.random() * 100;
}

// // multiplication : nb0 * nb1. 
function multiplication(nb0, nb1) {
    return nb0 + ' * ' + nb1 + ' = ' + (nb0 * nb1);
}

document.getElementById('p3').innerHTML = aleatoire();
document.getElementById('p4').innerHTML = multiplication(5, 10);

// * ______________________portée________________________________
// // Déclaration de deux variables globales.
let a = 5;
var b = 10;

// // fonction 0. 
function portee0() {
    document.getElementById('p5').innerHTML =
        'Depuis portee0() : <br>a = ' + a + '<br>b = ' + b;
}

// // fonction 1. 
function portee1() {
    let c = 1;
    var d = 2;
    document.getElementById('p6').innerHTML =
        'Depuis portee1() : <br> c = ' + c + '<br>d = ' + d;
}

// // fonction 2. 
function portee2() {
    let a = 20;
    var b = 40;
    document.getElementById('p7').innerHTML =
        'Depuis portee2() : <br>a = ' + a + '<br>b = ' + b;
}

// ? Ne pas oublier d'exécuter les fonctions. 
portee0();
portee1();
portee2();

document.getElementById('p8').innerHTML =
    'Depuis l\'espace global : <br>a = ' + a + '<br>b = ' + b;

document.getElementById('p9').innerHTML =
    'Depuis l\'espace global : <br>c = ' + c + '<br>d = ' + d;

// * _____________________différences de portée_________________________________
// ! Bien reprendre la fonction de l'exemple précédent (portee0).
function portee0() {
    let e = 1;
    var f = 2;
    if (true) {
        let e = 5;
        var f = 10;
        document.getElementById('p10').innerHTML = 'e (dans if) = ' + e;
        document.getElementById('p11').innerHTML = 'f (dans if) = ' + f;
    }
    document.getElementById('p12').innerHTML = 'e (hors if) = ' + e;
    document.getElementById('p13').innerHTML = 'f (hors if) = ' + f;
}

portee0();

// * ______________________Les valeurs de retour des fonctions________________________________
