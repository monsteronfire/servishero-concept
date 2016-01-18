# servishero-concept
A frontend experiment for ServisHero.

## Prerequisites
To run this project, locally, you will need the following things properly installed on your computer:
* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Grunt CLI](http://gruntjs.com/)

and then, you'll need to run
```zsh
git clone https://github.com/monsteronfire/servishero-concept.git
cd servishero-concept
npm install
```
## Helpful Links
* [Bourbon](https://github.com/thoughtbot/bourbon)
* [Neat](https://github.com/thoughtbot/neat)
* [Google Font - Signika](https://www.google.com/fonts/specimen/Signika)
* [Google Font - Sansita One](https://www.google.com/fonts/specimen/Sansita+One)
* [Google Font - Open Sans](https://www.google.com/fonts/specimen/Open+Sans)
* [FontAwesome](https://fortawesome.github.io/Font-Awesome/cheatsheet/)


## Build & development

Run `grunt` to build sass and compile js.

## Just In Case
* Building node in a custom directory helps you avoid having to execute commands with `sudo`. I've put instuctions/steps/etc. for that shizz in [this gist, yo](https://gist.github.com/monsteronfire/adcfd633aa78cfb72c60).

* When running `grunt`, you may encounter `Fatal error: Cannot read property 'contents' of undefined`. This is easily fixed by running:
```zsh
sudo npm cache clean && npm install grunt-contrib-imagemin
```