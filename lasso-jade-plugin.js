var fs = require('fs');
var jade = require('jade');

function compileFile(path, callback) {
    fs.readFile(path, 'utf8', function(err, src) {
        if (err) {
            return callback(err);
        }
        callback(null, 'module.exports=function(jade) { return ' + jade.compileClient(src) + '\n};');
    });
}

module.exports = function(lasso, config) {
    ['jade'].forEach(function(ext) {
         lasso.dependencies.registerRequireType(
             ext,
             {
                 properties: {
                     'path': 'string'
                 },

                 init: function(lassoContext, callback) {
                     if (!this.path) {
                         return callback(new Error('"path" is required for a Jade dependency'));
                     }

                     this.path = this.resolvePath(this.path);
                     callback();
                 },

                 read: function(lassoContext, callback) {
                     compileFile(this.path, callback);
                 },

                 getSourceFile: function() {
                     return this.path;
                 },

                 getLastModified: function(lassoContext, callback) {
                     lassoContext.getFileLastModified(this.path, callback);
                 }
             });
    });
};
