# Share frontend code with `src/views`

By default, the contents of `src/views` gets copied into each of your project's `@http` `GET` functions (at `node_modules/@architect/views` for Node, or `vendor/views` for Ruby and Python) whenever you run `npx sandbox`.

This means the modules in this folder can be used by any `@http` `GET` function in your app.

For example, here's how you'd require `src/views/layout.js`:

```javascript
var layout = require('@architect/views/layout')
```


## How is this different from `src/shared`?

When we looked at how people were using `src/shared`, we saw that people realized it was an easy way to share frontend components. Which is true! But we felt we could make it more explicit while also not bloating every function when the workflow desired was specifically for `@http` `GET`s.


## Use caution!

Everything in `src/views` will be copied into all of your project's `@http` `GET` HTTP functions, which has the potential to bloat your application.

Remember: you want to keep your functions sub-5MB for optimal performance.


## Note

You should feel free to delete this file and directory!
