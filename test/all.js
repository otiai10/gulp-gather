// this plugin
var plugin = require('../');
// tests
require('mocha');
var chai = require('chai').should();
var gutil = require('gulp-util');
var fs = require('fs');
var path = require('path');

var fixture = function(filePath) {
    filePath = path.join('test', 'fixtures', filePath);
    return new gutil.File({
        path: filePath,
        cwd: path.join('test', 'fixtures'),
        base: path.dirname(filePath),
        contents: fs.readFileSync(filePath)
    });
};

describe('gulp-gather', function() {
    describe('plugin', function() {
        it('should compile html file as key-value static pool', function () {
            var stream = plugin('compiled.js', {namespace: 'MyTemplates'});
            var tpl = fixture("001.html");
            stream.write(tpl);
            stream.end();
        });
    });
});
