const fs = require('fs');

const lueVirta = fs.createReadStream('./tiedostot/lorem.txt', { encoding: 'utf8' });

lueVirta.on('data', (chunk) => {
    console.log(chunk);
});