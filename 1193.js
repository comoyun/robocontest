const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');

const ali = lines[0];
const vali = lines[1];
const gani = lines[2];

const quduq = [];
const qaychi = [];
const qogoz = [];

if (ali === "qog'oz") qogoz.push('Ali');
if (vali === "qog'oz") qogoz.push('Vali');
if (gani === "qog'oz") qogoz.push("G'ani");

if (ali === 'quduq') quduq.push('Ali');
if (vali === 'quduq') quduq.push('Vali');
if (gani === 'quduq') quduq.push("G'ani");

if (ali === 'qaychi') qaychi.push('Ali');
if (vali === 'qaychi') qaychi.push('Vali');
if (gani === 'qaychi') qaychi.push("G'ani");

if (quduq.length === 1 && qaychi.length && !qogoz.length) 
    console.log(quduq[0]);
else if (qaychi.length === 1 && qogoz.length && !quduq.length)
    console.log(qaychi[0]);
else if (qogoz.length === 1 && quduq.length && !qaychi.length)
    console.log(qogoz[0]);
else console.log('?');
