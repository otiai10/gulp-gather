gulp-micro-templates
===================

[![Build Status](https://travis-ci.org/otiai10/gulp-micro-templates.svg?branch=master)](https://travis-ci.org/otiai10/gulp-micro-templates)

Respecting [micro-templating](http://ejohn.org/blog/javascript-micro-templating/)

# why

- Want to use [micro-templating](http://ejohn.org/blog/javascript-micro-templating/) in project without html
- Want to write and devide template for [micro-templating](http://ejohn.org/blog/javascript-micro-templating/) by `.html` file

# spec

Concat these `.html` fiels ...

```html
<!-- ./tpl/foo.html -->
<a href="<%= url %>"><%= name %></a>
```

```html
<!-- ./tpl/bar/baz.html -->
<% for ( var i = 0; i < users.length; i++ ) { %>
  <li><a href="<%=users[i].url%>"><%=users[i].name%></a></li>
<% } %>
```

To static pool like below

```javascript
this.MicroTemplates = {
    "tpl/foo.html": "<a href=\"<%= url %>\"><%= name %></a>",
    "tpl/bar/baz.html": "<% for ( var i = 0; i < users.length; i++ ) { %>
  <li><a href=\"<%=users[i].url%>\"><%=users[i].name%></a></li>
<% } %>"
};
```

# usage

gulpfile.js

```javascript
var microtemplates = require('gulp-micro-templates');
gulp.task('microt',function(){
    gulp.src('./tpl/**/*.html')
    .pipe(microtemplates('all.js'))
    .pipe(gulp.dest('./build/tpl'));
});
```
