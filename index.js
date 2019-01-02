const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors()); // Sets headers to * to allow backend and front end to communicate
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (request, response) => {
    response.send('<h1>The server is working!</h1>')
})

app.get('/api/test', (request, response) => {
    const data = {
        success: true,
        message: 'Test API working',
        another: 'Property goes here'
    }

    response.send(data);
})

app.get('/api/user', (request, response) => {
    const user = {
        email: 'jollygood@mail.com',
        name: 'johnny',
        username: 'jollygood'
    }

    response.send(user);
});

app.post('/api/send-message', (request, response) => {
    console.log('Data from Client: ', request.body);

    response.send({
        success: true,
        dataReceived: request.body,
    })
});

app.listen(PORT, () => {
    console.log('Server running @ localhost: ', PORT);
}).on('error', (error) => {
    console.log('Server listen error, do you already have a server running on PORT: ', PORT);
});