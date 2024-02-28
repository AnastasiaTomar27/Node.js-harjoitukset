const fs = require('fs');
fs.writeFile('./blogit/blogi2.txt', 'Tämä on teksti.', () => {
    console.log('Tieto kirjoitettiin tiedostoon');
});