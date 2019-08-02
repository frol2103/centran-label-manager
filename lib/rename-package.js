
let fs = require('fs')
fs.readFile('dist/package.json', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(/"name": "centran-label-manager"/g, '"name": "@centran/centran-label-manager"');

    fs.writeFile('dist/package.json', result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});