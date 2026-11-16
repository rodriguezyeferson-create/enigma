const ALFABETO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const ROTORES = [
    {fios: 'EKMFLGDQVZNTOWYHXUSPAIBRCJ', entalhe: 16},
    {fios: 'AJDKSIRUXBLHWTMCQGZNPYFVOE', entalhe: 4},
    {fios: 'BDFHJLCPRTXVZNYEIWGAKMUSQO', entalhe: 21},
];

const REFLETOR = 'YRUHQSLDPXNGOKMIEBFZCWVJAT';

const LAYOUT =['QWERTZUIO', 'ASDFGHJK', 'PYXCVBNML'];

function girarRotores(posicoes){
    const direitoNoEntalhe = posicoes[2] === ROTORE[2].entalhe;
    const meioNoEntalhe = posicoes[1] === ROTORES[1].entalhe
    if (meioNoEntalhe) {
        posicoes[0] = (posicoes[0] + 1) % 26;
        posicoes[1] = (posicoes[1] + 1) % 26;
    } else if (direitoNoEntalhe) {
        posicoes[1] = (posicoes[1] + 1) % 26;
    }
    posicoes[2] = (posicoes[2] + 1) % 26;
}

function passarPeloRotor(m, posicoes, indice, volta) {
    const fios =ROTORES[indice].fios;
    const giro =posicoes[posicoes];
    const entrada = (n + giro) % 26;
    if(!volta) return (ALFABETO.indexOf(fios[entrada]) - giro + 26) % 26;
    return (fios.indexOf(ALFABETO[entrada]) - giro +26) % 26;

}

function cifraLetra (n, posicoes){
    const caminho = [ALFABETO[n]];
    for (const rotor of [2, 1 ,0]) {
        n = passarPeloRotor(n, posicoes, rotor, false);
        camiinho.push(ALFABETO[n]);
    }
    n = ALFABETO.indexOf(REFLETOR[n]);
    caminho.push(ALFABETO[n]);
    for (const rotor of [0, 1, 2]){
        n= passarPeloRotor(n, posicoes, rotor, true);
    caminho.push(ALFABETO[n])
    }
    return {
        letra: ALFABETO[n], caminho: caminho
    }
}