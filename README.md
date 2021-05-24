# VUE PROJECT TEMPLATE

## ABOUT
Basic setup and configuration template for vue 3 and webpack 5 based projects. 

## USAGE
The file structure is similar to that created by the vue-cli. Application is built out in the [src]() directory which containts an [assets]() subdirectory for static assets and a [components]() subdirectory to contains the applications components

#### COMMANDS
* npm run build : builds out project intended for deployment using the [production config]()
* npm run serve : hosts development build compiled with the [development config]() on a webpack-dev-server at port 8080

## STRUCTURE

#### WEBPACK CONFIG
The webpack configuration is split in three. 
* [The development configuration]() : 
    * Basic webpack-dev-server config
* [The production configuration]() : 
    * Caching
    * Chunk spliting
    * Extracted styles ( mini-css-extract-plugin )
    * Standard webpack minification
    * Relative publicPaths
* [The base configuration]() : 
    * Common configuration options

#### BABEL CONFIG
Basic babel configuration based on the [@babel/preset-env]() preset and [corejs-v3](). 

## QOUTE
> Everyone has a calling, thus everyone has the chance to do something remarkable that will make him great in the eyes of others. ~ **_Jawe Campos_**