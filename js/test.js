let x = 5;
let y = -20;

if (x >= 0 && x <= 10) {
    document.getElementById('p1').innerHTML = 'x entre 0 et 10'
}

if (y < -10 || y > 10) {
    document.getElementById('p2').innerHTML = 'y under -10 ou plus grand que 10'
}

if (!(x <= 2)) {
    document.getElementById('p3').innerHTML = 'x sup à 2'
}