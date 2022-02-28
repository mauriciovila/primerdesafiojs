// algoritmo basado en que niños se suban o no a una atracción según su edad

let edadesDeLosChicos = [2, 4, 5, 8, 3, 14, 12, 17, 16];

for (let i = 0; i < 9; i++) {
    if (edadesDeLosChicos[i] <= 4) {
        console.log(`tenes ${edadesDeLosChicos[i]} no entras ni loco`)
    }
   
   else if ((edadesDeLosChicos[i] >= 5) && (edadesDeLosChicos[i] <= 16)) {
        console.log(`tenes ${edadesDeLosChicos[i]} pasa de ruta amigooo`)
    }

   else {
        console.log(`arranca pa las ocho horas papa, ${edadesDeLosChicos[i]} tenes`)
    }
}
