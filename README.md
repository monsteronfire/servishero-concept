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

## Build & development

Run `grunt` to build sass and compile js.

## Just In Case
When running `grunt`, you may encounter `Fatal error: Cannot read property 'contents' of undefined`. this is easily fixed by running:
```zsh
sudo npm cache clean && npm install grunt-contrib-imagemin
```