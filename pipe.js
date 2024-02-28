const fs = require('fs');

const lueVirta = fs.createReadStream('./tiedostot/lorem.txt');
const kirjoitaVirta = fs.createWriteStream('./blogit/blogi4.txt');

lueVirta.pipe(kirjoitaVirta);