# Share code with `src/shared`

The contents of `src/shared` get copied into each of your project's functions (at `node_modules/@architect/shared` for Node, or `vendor/shared` for Ruby and Python) whenever you run `npx sandbox`.

This means the modules in this folder can be used by function in your app.

For example, here's how you'd require `src/shared/layout.js`:

```javascript
var layout = require('@architect/shared/layout')
```


## Organizing `src/shared`

Organize shared code however it makes sense for your app. Here are a few ideas:

- `src/shared/middleware`
- `src/shared/helpers`
- `src/shared/lib`

Also, feel free to overwrite the contents of this file to describe your project's shared code structure for your teammates (or delete it altogether).


## Use caution!

Everything in `src/shared` will be copied into all of your cloud functions, which has the potential to quickly bloat your application.

Remember: you want to keep your functions sub-5MB for optimal performance.


## Note

You should feel free to delete this file and directory!
