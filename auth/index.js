const crypto = require('crypto');

// Implementing pbkdf2 with all its parameters
crypto.pbkdf2('123', 'salt', 100000, 64,
    'sha512', (err, derivedKey) => {

        if (err) throw err;

        // Prints derivedKey
        console.log(derivedKey.toString('hex'));
    });
