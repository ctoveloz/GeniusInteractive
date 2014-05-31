Read-me:
Version 0.1 - Cristiano Veloz


WORKFLOW Genius Interactive

Requirements:
Sass, Compass, Grunt and Bower

  - http://sass-lang.com/install
  - http://compass-style.org/install/
  - http://gruntjs.com/getting-started
  - http://bower.io/


Usage:
  
  - Open Console NodeJS
  
  - Go to folder project
    ~ cd: folder/geniusinteractive

  - Run Grunt
    ~ grunt

  This will start a server for you on localhost:9000, with a watch task for your HTML, Sass and JavaScript files, with LiveReload activated.

  ***DEPLOY***
  - Run Grunt Build
   ~ grunt build



Walkthrough:


Sass files

Inside src/assets/sass you'll find a series of files. The one you'll be dealing with, mostly, will be _style.scss.
Your main Sass files are main.scss and main-ie.scss but maintaining two files just to work with REM would be a pain, so those two files only import everything you need.
You should only need to work with _style.scss, partials/_variables.scss and partials/_functions.scss, along with any other partials you might want to create to organize your stylesheets. Just import them on _style.scss.
Sprites are configured out-of-the-box. Jump into _style.scss to check out how to make use of this goodness.
The folder partials/h5bp contains the CSS from HTML5 Boilerplate, split between files and imported inside _style.scss.

JavaScript files
Inside src/assets/js you'll find a folder named vendor. It holds for you the jQuery 1.10.2 and Modernizr 2.7.1 minified version of these libs.
main.js should be used for your general JavaScript'ing.
plugins.js should hold all the plugins you might need/want to use. Just toss them in there, after the initial JS writen.
These two files, when you're running an watch task from Grunt will be concatenated into one single file: scripts.js. If you're running a grunt build it will concatenate those two and then will run an uglify task on the resulting scripts.js.

Images
Your images should the thrown inside the src/assets/img folder. Inside this folder you'll also find another one named sprite. This one has two sub-folders, standard and retina, which should contain your individual sprite images for standard DPI screens and high DPI screen, respectively.