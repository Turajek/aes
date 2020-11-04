const ecb = require('./js/ecb');
const cbc = require('./js/cbc');
const ofb = require('./js/ofb');
const cfb = require('./js/cfb');
const ctr = require('./js/ctr');

ecb.run('small');
ecb.run('middle');
ecb.run('big');

cbc.run('small');
cbc.run('middle');
cbc.run('big');

ofb.run('small');
ofb.run('middle');
ofb.run('big');

cfb.run('small');
cfb.run('middle');
cfb.run('big');

ctr.run('small');
ctr.run('middle');
ctr.run('big');