// this plugin
var plugin = require('../');
// tests
require('mocha');
var chai = require('chai').should();

// var defineModule = require('gulp-define-module');
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

describe('gulp-micro-template', function() {
    describe('foo', function() {
        it('should be true', function () {
            var stream = plugin();
            var tpl = fixture("001.html");

            plugin.foo().should.be.true;

            stream.on('data', function(dest) {

            });

            stream.write(tpl);
            stream.end();
        });
    });
});