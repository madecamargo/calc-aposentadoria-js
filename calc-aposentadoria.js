const nome = 'Jotaro';
const sexo = 'M';
const idade = 35;
const contribuicao = 50;
const aposentadoria = idade + contribuicao;
console.log(aposentadoria)

if (sexo === 'M') {
    if (aposentadoria >= 95) {
        console.log('Você pode se aposentar!');
    }
    else {
        console.log('Você ainda não pode se aposentar!');
    }
}
else {
    if (aposentadoria >= 85) {
        console.log('Você pode se aposentar!');
    }
    else {
        console.log('Você ainda não pode se aposentar!');
    }
}