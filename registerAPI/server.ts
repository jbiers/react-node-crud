var http = require('http');

import { Request, Response } from 'express';
const express = require('express');
const app = express();


app.use(require('cors')());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


interface Book {
    name: string;
    author: string;
    genre: string;
    pages: number;
    id: number;
}

const books = [] as Book[];


app.get('/books', (req: Request, res: Response) => {
    return res.status(200).json({'books': books});
})


app.post('/books', (req: Request, res: Response) => {
    const { name, author, genre, pages } = req.body;

    const newBook = {
        name: name,
        author: author,
        genre: genre,
        pages: parseInt(pages),
        id: books.length,
    }

    books.push(newBook as Book);

    return res.status(201).json({'book': newBook});
})

app.get('/books/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    const book = books.find(book => {
        book.id === Number(id);
    })

    if (book) {
        return res.status(200).json(book);
    }

    return res.status(404).json({'error': 'Could not find book by this id.'})
})

var server = http.createServer(app);
server.listen(3031);
console.log('Server listening on port 3031...');