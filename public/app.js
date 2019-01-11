const vilkku = document.getElementById('vilkku');

const colors = ['blue', 'orange', 'purple'];

let i = 0;

function vaihda() {
    vilkku.style.color = colors[i % 3];
    i++;
}

setInterval(vaihda, 1000);
