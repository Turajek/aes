var aesjs = require('aes-js');
var fs = require('fs');


exports.run = function (filetype = 'small') {

    var key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    var aesEcb = new aesjs.ModeOfOperation.ecb(key);

    fs.readFile(`./data/${filetype}File.txt`, function read(err, text) {
        if (err) {
            throw err;
        }
        console.time('ecb encrypting ' + filetype)
        var textBytes = aesjs.utils.utf8.toBytes(text);
        var encryptedBytes = aesEcb.encrypt(textBytes);
        // encryptedBytes[3] = !encryptedBytes[3];
        console.timeEnd('ecb encrypting ' + filetype);

        console.time('ecb decrypting ' + filetype)
        var decryptedBytes = aesEcb.decrypt(encryptedBytes);
        var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
        console.timeEnd('ecb decrypting ' + filetype);
        // console.log(decryptedText);

    });

}