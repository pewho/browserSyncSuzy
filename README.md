browserSyncSuzy
===============

Scaffold for BrowserSync + Sass + Suzy
--------------------------------------

Starter for rapid prototyping, with livereload server via [browsersync](https://www.browsersync.io/), to experiment (and mess) with Sass. 
Pack [Susy framework](http://susy.oddbird.net/) for a base grid system, with also some css preprocessing tools (powered by gulp):
  - [autoprefixr](https://www.npmjs.com/package/gulp-autoprefixer)
  - [sourcemap](https://github.com/floridoo/gulp-sourcemaps)
  
Installation
------------

```
>>> git clone git@github.com:pewho/browserSyncSuzy.git
>>> cd browserSyncSuzy
>>> npm install
```

Usage
-----
- Launch browsersync with:

```
>>> npm start
```

- Modify app/index.html, app/scss/app.scss
- ...
- Profit !

Note
----

If you encounter this error when you launch the server :

```
Error: watch [PROJECT FOLDER]/app/scss/ ENOSPC
```

This is lickely a lake of space allowed for inotify on linux system. you could fix it whith this command :

```
>>> echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
