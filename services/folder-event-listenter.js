const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const jsonfile = require('jsonfile');
const express = require('express');

const app = express();

const watcher = chokidar;
const regEx = {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
};

function init() {
  listen_DirOne();
  listen_DirTwo();
}

const dir_one = watcher.watch( './dir-one', regEx );

const dir_two = watcher.watch( './dir-two', regEx );

function listen_DirOne() {
  dir_one
  .on( 'add', path => (console.log(`File ${path} has been added`)));
}

function listen_DirTwo() {
  dir_two
    .on('add', path => (console.log(`File ${path} has been added`)));
}

module.exports = init;