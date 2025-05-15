// * Présentation et utilisation des opérateurs logiques : "&&", "||" et "!".

let x = 5;
let y = -20;

if (x >= 0 && x <= 10) {
    document.getElementById('p1').innerHTML = 'x entre 0 ET(&&) 10';
}

if (y < -10 || y > 10) {
    document.getElementById('p2').innerHTML = 'y under -10 OU(||) plus grand que 10';
}

if (!(x <= 2)) {
    document.getElementById('p3').innerHTML = 'x sup à 2';
}

// * Précédence et règles d’associativité des opérateurs : "&&", "||" et "!". 

let a = 15;
let b = -20;
let c = 0;

if (a <= 25 - 15 && a >= 0 || b < 0) {
    document.getElementById('p4').innerHTML = 'a entre 0 ET 10 OU négatif OU si toutes les conditions sont rémplies';
}

if (a <= 25 - 15 && (a >= 0 || b < 0)) {
    document.getElementById('p5').innerHTML =
        '"a" inf. ou égal à 10 ET "a" sup. à 0 ET "b" négatif OU si les deux conditions sont rémplies';
}

if (!c == true) {
    document.getElementById('p6').innerHTML = '"c" est false';
}

// * Utiliser l’opérateur ternaire "? :" pour écrire des conditions JavaScript condensées : "?" avec ":". 

let d = 15;
let e = -20;
// ! Surtout respecter cet ordre de déclaration sinon cela cassera le code
document.getElementById('p7').innerHTML = d >= 10 ? 'd est sup. à 10' : 'd est inf. à 10';

// ! Surtout respecter cet ordre de déclaration sinon cela cassera le code
document.getElementById('p8').innerHTML = e >= 10 ? 'e sup. à 10' : 'e inf. à 10';

// * Ternaires "?" avec ":" vs conditions classiques "if else". 

let f = 15;

// // Utilisation de l'opérateur ternaire "? :": 
document.getElementById('p10').innerHTML = f >= 10 ? 'f sup. à 10' : 'f inf. à 10';

// // Équivalent avec une structure "if else" : 
if (f >= 10) {
    document.getElementById('p11').innerHTML = 'f sup. à 10';
} else {
    document.getElementById('p11').innerHTML = 'f inf. à 10';
}

// * L’instruction "switch" en JavaScript.

let g = 15;

switch (g) {
    case 2:
        document.getElementById('p13').innerHTML = 'g stock 2';
        break;
    case 5:
        document.getElementById('p13').innerHTML = 'g stock 5';
        break;
    case 10:
        document.getElementById('p13').innerHTML = 'g stock 10';
        break;
    case 15:
        document.getElementById('p13').innerHTML = 'g stock 15';
        break;
    case 20:
        document.getElementById('p13').innerHTML = 'g stock 20';
        break;
    default:
        document.getElementById('p13').innerHTML = 'g ne stock ni 2, ni 5, ni 10, ni 15, ni 20';
}

// * Les opérateurs d’incrémentation et de décrémentation : "++x", "x++", "--x", "x--".

// // déclarons et initialisons sur la même ligne nos variables. 
let h = 10, i = 10, j = 20, k = 20;

// // Nous incrémentons / décrémentons et affectons le résultat dans un paragraphe.
// ! ATTENTION : le premier "+" est un opérateur de concaténation.
document.getElementById('p14').innerHTML = 'h stock ' + h++;
document.getElementById('p15').innerHTML = 'i stock ' + ++i;
document.getElementById('p16').innerHTML = 'j stock ' + j--;
document.getElementById('p17').innerHTML = 'k stock ' + --k;

// // Voici le contenu de nos variables
document.getElementById('p18').innerHTML = 'h = ' + h + ', i = ' + i + ', j = ' + j + ', k = ' + k;

