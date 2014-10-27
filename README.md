optimizer-jade
==============

Plugin for the [RaptorJS Optimizer](https://github.com/raptorjs/optimizer) that compiles Jade templates to CommonJS modules. These templates can easily be rendered using the [view-engine](https://github.com/patrick-steele-idem/view-engine) module (in conjunction with [view-engine-jade](https://github.com/patrick-steele-idem/view-engine-jade)).

# Installation

```bash
npm install optimizer-jade --save
```

You will also need to install [view-engine](https://github.com/patrick-steele-idem/view-engine) and [view-engine-jade](https://github.com/patrick-steele-idem/view-engine-jade):

```bash
npm install view-engine --save
npm install view-engine-jade --save
```

# Usage

Enable the Jade view engine:

```javascript
require('view-engine').register(
    'jade',
    require('view-engine-jade'));
```

Render templates on the client or server:

```javascript
var template = require('view-engine').load('./template.jade');
template.render({
        name: 'Frank'
    },
    function(err, output) {
        console.log('Template output: ', output);
    });
```