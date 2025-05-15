// * Boucle "while". 
// // Nous initialisons la variable let a avec la valeur 0. 
let a = 0;

// // Tant que "a" (n'est pas arrivé à 5, relancer la boucle, puis sortir de la boucle). 
while (a < 3) {
    document.getElementById('p1').innerHTML +=
        'a stock ' + a + ' lors du passage de n°'
        + (a + 1) + ' dans la boucle<br>';

    a++;
}

// * Boucles "while" et "do...while".
let b = 0, c = 0;
let d = 5, e = 5;

// // Tant que "b" (n'est pas arrivé à 5, relancer la boucle, puis sortir de la boucle). 
while (b < 5) {
    document.getElementById('p2').innerHTML +=
        'b stock ' + b + ' lors du passage n°'
        + (b + 1) + ' dans la boucle<br>';
    b++;
}

do {
    document.getElementById('p3').innerHTML +=
        'c stock ' + c + ' lors du passage n°'
        + (c + 1) + ' dans la boucle<br>';
    c++;
}
while (c < 5);

// ? La condition de sortie est dès le début remplie donc la boucle ne se lance pas.
while (d < 5) {
    document.getElementById('p4').innerHTML +=
        'd stock ' + d + ' lors du passage n°'
        + (d + 1) + ' dans la boucle<br>';
    d++;
}

// ? La condition de sortie est dès le début remplie mais la boucle se lance quand même.
do {
    document.getElementById('p5').innerHTML +=
        'e stock ' + e + ' lors du passage n°'
        + (e + 1) + ' dans la boucle<br>';
    e++;
}
while (e < 5);

// * Boucle "for" (en genéral appelé "i" pour "iterator"), ici c'est "f". 
// ? La boucle "for" contient 3 phases séparées par un point-virgule.
// // phase 1 : initialisation. 
// // phase 2 : condition de sortie de boucle. 
// // phase 3 : itération (ici une incrémentation). 

for (let f = 0; f < 5; f++) {
    document.getElementById('p6').innerHTML +=
        'f stock ' + f + ' lors du passage n°'
        + (f + 1) + ' dans la boucle<br>';
}

// * La boucle "for" : instruction "continue".

for (let g = 0; g < 10; g++) {
    // // Si g / 2 possède un reste, alors il est impair. 
    if (g % 2 != 0) {
        continue;
    }
    document.getElementById('p7').innerHTML +=
        'g stock ' + g + ' lors du passage n°'
        + (g + 1) + ' dans la boucle<br>';
}

for (let h = 0; h < 1000; h++) {
    if (h == 3) {
        break;
    }
    document.getElementById('p8').innerHTML +=
        'h stock ' + h + ' lors du passage n°'
        + (h + 1) + ' dans la boucle<br>'
}