var through2  = require('through2'),
    fs        = require('fs'),
    gutil     = require('gulp-util'),
    // errored   = gutil.PluginError,
    // PKG_NAME  = 'gulp-micro-template',
    NAMESPACE = 'MicroTemplates';

module.exports = function(fileName, opts) {
    opts = opts || {};
    var pool = {},
        firstFile;
    function transform(file, enc, callback) {
        var err;
        var templateName = file.path.replace(file.cwd + '/', '');
        pool[templateName] = file.contents.toString();
        if (!firstFile) firstFile = file;
        callback(err);
    }
    function flush(callback) {
        var err,
            namespace = opts.namespace || NAMESPACE,
            contents = 'this.'+namespace+'='+JSON.stringify(pool)+';';

        var output = new gutil.File({
            cwd:  firstFile.cwd,
            base: firstFile.base,
            path: firstFile.base + fileName
        });
        output.contents = new Buffer(contents);
        this.push(output);

        callback(err);
    }
    return through2.obj(transform, flush);
};
