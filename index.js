const supertest = require('supertest');
const PgPromise = require("pg-promise")
const express = require('express');
const assert = require('assert');
const fs = require('fs');
require('dotenv').config()

const API = require('./api');
const { default: axios } = require('axios');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))

const config = {
	connectionString: process.env.DATABASE_URL || 'postgres://gary:gar123@localhost:5432/garment_app',
	max: 30,
	ssl:{ rejectUnauthorized : false}
 };
 
 const db = pgp(config);

// const DATABASE_URL = process.env.DATABASE_URL;
// const pgp = PgPromise({});
// const db = pgp(DATABASE_URL);

API(app, db);

const PORT = process.env.PORT || 5001;



app.listen(PORT, function() {
	console.log(`App started on http://localhost:${PORT}`)
});