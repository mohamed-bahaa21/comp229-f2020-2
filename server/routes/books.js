// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find((err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/
  res.render('books/details', {
    title: "Add Book",
    books: {
      Title: "",
      Price: '',
      Author: "",
      Genre: ""
    }
  });

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/
  let bookId = req.params.id;

  // find all books in the books collection
  book.findById({ _id: bookId }, (err, book) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/details', {
        actionRoute: `/books/${book._id}`,
        title: "Edit Book",
        books: {
          _id: book._id,
          Title: book.Title,
          Price: book.Price,
          Author: book.Author,
          Genre: book.Genre
        }
      });
    }
  });
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/
  let bookId = req.params.id;
  let { Title, Price, Author, Genre } = req.body;

  // find all books in the books collection
  book.findById({ _id: bookId }, (err, book) => {
    if (err) {
      return console.error(err);
    }
    else {
      book.Title = Title;
      book.Description = "";
      book.Price = Price;
      book.Author = Author;
      book.Genre = Genre;

      book.save()
        .then(function (err, result) {
          res.redirect(`/books/${book._id}`);
        })
        .catch(err => console.log(err));
    }
  });

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/
  let bookId = req.params.id;
  let { Title, Price, Author, Genre } = req.body;

  // find all books in the books collection
  book.findOneAndDelete({ _id: bookId }, (err, book) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.redirect('/books');
    }
  });
});


module.exports = router;
