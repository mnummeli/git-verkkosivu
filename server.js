#!/usr/bin/env node

'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Esimerkkisovellus vastaa portissa ${PORT}`);
});
