#!/usr/bin/env node

const meow = require('meow');
const cabeloUnhas = require('./index')

// TODO: when tail call optimization is implemented on NodeJS, simplify this.
const cliMode = async ({ flags }) => {
  while (true) await cabeloUnhas();
};

const cliInterface = meow({});

cliMode(cliInterface);