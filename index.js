var through2 = require('through2');

// const _NAME = 'gulp-micro-template';
var _NAME = 'gulp-micro-template';

module.exports = function(opts) {
    console.log(opts);
    for (var i in opts) {
        console.log("hoge");
        console.log(i, typeof opts[i]);
        console.log("fuga");
    }
    var cache = cache || {};
    // define process for each file
    var th2 = through2.obj(function(file, enc, callback) {
        // pass this file if it's null
        if (file.isNull()) {
            return callback(null, file);
        }
        callback(null, file);
    });
    return th2;
};

module.exports.foo = function() {
    return true;
};
