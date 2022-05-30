// const chalk = require('chalk');
import chalk from 'chalk';
import pegaArquivo from './index.js';
//const pegaArquivo = require('./index.js');
import validaURLs from './http_validacao.js';

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if (caminho[3] === 'validar') {
        console.log(chalk.yellow('links validados'), await validaURLs(resultado));
    }
    else {
        console.log(chalk.yellow('lista de links'), resultado);
    }
}

processaTexto(caminho);


