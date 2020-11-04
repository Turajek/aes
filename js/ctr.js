var aesjs = require('aes-js');
var fs = require('fs');


exports.run = function (filetype = 'small') {

    var key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    var aesCtr = new aesjs.ModeOfOperation.ctr(key);

    fs.readFile(`./data/${filetype}File.txt`, function read(err, text) {
        if (err) {
            throw err;
        }
        console.time('ctr encrypting ' + filetype)
        var textBytes = aesjs.utils.utf8.toBytes(text);
        var encryptedBytes = aesCtr.encrypt(textBytes);
        console.timeEnd('ctr encrypting ' + filetype);

        console.time('ctr decrypting ' + filetype)
        var decryptedBytes = aesCtr.decrypt(encryptedBytes);
        var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
        console.timeEnd('ctr decrypting ' + filetype);
        // console.log(decryptedText);

    });

}