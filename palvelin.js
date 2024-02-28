const http = require('http');
const palvelin = http.createServer((req, res) => {
    console.log('pyyntö tehty');
});

palvelin.listen(3000, 'localhost', () => {
    console.log('Kuunnellaan portin 3000 pyyntöjä');
});