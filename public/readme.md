# Host static assets with `public/`

The `public` directory is a great place to add (compiled) JS and CSS, images, gifs, or any other files you want to to make publicly accessible in your app.

Each time your app deploys, the contents of this folder will automatically be published to S3 and Begin's CDN.


## Use caution!

The full contents of this folder will be copied with each deploy, overwriting any existing files with the same name.


## Note

You should feel free to delete this file and directory!
