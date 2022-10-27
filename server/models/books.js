/*
    File Name: books.js
    Student Name: Kristi Goxhaj
    StudentID: 301147545
    Date: 27/10/2022
*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
