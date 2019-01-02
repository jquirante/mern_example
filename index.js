const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors()); // Sets headers to * to allow backend and front end to communicate


app.get('/', (request, response) => {
    response.send('<h1>The server is working!</h1>')
})

app.listen(PORT, () => {
    console.log('Server running @ localhost: ', PORT);
}).on('error', (error) => {
    console.log('Server listen error, do you already have a server running on PORT: ', PORT);
});