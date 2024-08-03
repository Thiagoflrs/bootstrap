// + Operador de Soma
// - Operador de Subtração
// * Multiplicação
// ** Potência
// / Divisão
// % Módulo(Resultado de uma divisão)


for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
} 

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
} 


for (let i = 0; i <= 10; i += 3) {
    console.log(i);
} 


for (let i = 0; i <= 10; i++) {
    let totalMod =0;

    for (let x = 0; x <= 10; x++) {
        if ( i % x == 0) {
            totalMod += 1;
        }
    }

    if (totalMod == 2) {
        console.log(i);
    }
}




