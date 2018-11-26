# Bootstrap 4 Starter Kit

This is the starter kit for Bootstrap 4.1.3. 

---

# How To Run
Type the following into your terminal window:
```
npm install
```
Then type:
```
npm start
```

## Sass Compiling/Minification
Gulp-sass handles compiling sass files and minifying them into css/main.min.css. If you do not want to use sass, then write you css in src/scss/main.scss under the two @import. Do NOT remove the imports at the top of the file as this imports Bootstrap 4 and will break your project.

## Image Minification
Gulp-imagemin takes all images from src/img and minifies them. The minified images are then moved to dist/img for use within your project.

## Live Server
Browser-sync is used to watch for changes to any css or html file. The browser will reload on any change. In order to use live reload, use
`localhost:3000` within your browser's address bar. The port may change, so make sure to check which port is being used within your terminal window.

## Dependencies
* Font Awesome 5.5.0
* Bootstrap 4.1.3
* Animate.css
* Main.min.css
* jQuery 3.3.1
* Popper.js