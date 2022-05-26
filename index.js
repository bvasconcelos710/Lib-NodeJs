// const chalk = require('chalk');
import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados.length === 0 ? 'não há links no texto' : arrayResultados;
}

function trataErro(erro) {
    throw new Error(chalk.red(erro));
}

async function pegaArquivo(caminhoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoArquivo, encoding)
        return extraiLinks(texto);
    }
    catch (erro) {
        trataErro(erro);

    }
}
export default pegaArquivo;

// pegaArquivo('./arquivos/texto1.md');

//function pegaArquivo(caminhoArquivo) {
//    const encoding = 'utf-8';
//    fs.promises.readFile(caminhoArquivo, encoding).then((texto) => console.log(chalk.green(texto))).catch((erro) => trataErro(erro));
//}


// function pegaArquivo(caminhoArquivo) {
//    const encoding = 'utf-8';
//    fs.readFile(caminhoArquivo, encoding, (erro, texto) => {
//        if (erro) {
//           trataErro(erro);
//        }
//        console.log(chalk.green(texto));
//   })
//}

