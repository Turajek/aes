var aesjs = require('aes-js');
var fs = require('fs');


exports.run = function (filetype = 'small') {

    var key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    var iv = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

    var aesCfb = new aesjs.ModeOfOperation.cfb(key, iv);

    fs.readFile(`./data/${filetype}File.txt`, function read(err, text) {
        if (err) {
            throw err;
        }
        console.time('cfb encrypting ' + filetype)
        var textBytes = aesjs.utils.utf8.toBytes(text);
        var encryptedBytes = aesCfb.encrypt(textBytes);
        // encryptedBytes[3] = !encryptedBytes[3];
        console.timeEnd('cfb encrypting ' + filetype);

        console.time('cfb decrypting ' + filetype)
        var decryptedBytes = aesCfb.decrypt(encryptedBytes);
        var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
        console.timeEnd('cfb decrypting ' + filetype);
        // console.log(decryptedText);

    });

}