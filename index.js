const express = required('express');
const server = express();

const posts = [
    {
        username: 'Kyle',
        title: 'Title 1'
    },
    {
        username: 'John',
        title: 'Title 2'
    },
]

server.get('/posts', (req, res) => {

});


server.listen(3000);