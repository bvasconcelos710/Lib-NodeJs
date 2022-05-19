// const chalk = require('chalk');
import chalk from 'chalk';
import fs from 'fs';

function pegaArquivo(caminhoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoArquivo, encoding, (_, texto) => {
        console.log(chalk.green(texto));
    })
}
pegaArquivo('./arquivos/texto1.md');