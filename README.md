# o.melon.webapp
![o.melon](views/img/touch/icon-256x256.png)

[o.melon.webapp](https://www.npmjs.com/package/o.melon.webapp) is the engine used for creating a web application by utilizing Progressive Web Apps best practices.

## Features
This project has a lot of great features, here is the most interesting of them:
* Boost Progressive Web Apps development with pre-developed templates and built-in commands;
* Built-in plugins and library management for the frontend. With o.melon.webapp you can dynamically add any library that you can find in Yarn and it will be automatically included in your web app. That's mean you can easily install one of your favorite frameworks: Electron, React, Angular, etc;
* Ready to go PWA. You can use this project to create PWA that is ready to deploy and have all major PWA features in it;
* Out of the box compilation of EJS, SASS, LESS, and JS;
* Build-in minimization for SASS, LESS, JavaScript, HTML, and images;
* Deploy on AWS bucket with invalidation generation for changed files;
* Server, that uses WebSocket events for dynamic frontend update in development;

## Motivation
The main idea behind creating this project is - be able to create a web application in a fast and clean way. This project achieves these goals by creating gulp tasks that can compile, build, watch for changes and deploy source files, less than a minute.

## Requirements
You need to have installed `npm` and `node` on your system. All base functionality was tested on `npm` 3.10.10 and `node` 6.14.3 versions.

## Installation
You can simply make a clone of this repository and run the `npm install` command in it.
You can also install o.melon command line tools, by running:
```
npm install -g o.melon yarn
```
Also, you will probably need administrative rights for global installation.

After installation, you will get access to all engines features via command line.
Run this command, to get a list of all supported commands:
```
o.melon --help
```
Note, that command line tools will work only on Linux and Unix based systems.

## Quick start
You can start the project, by building it and running watch for changes, with one simple command:
```
npm start
```
If you want to use o.melon command line tools:
```
o.melon -b -w
```
You will found build artifacts in `dist/[environment]/` folder, plus with watch command, you can get access to all these changes via server, that is running by default on [http://localhost:8008/](http://localhost:8008/).

The good way to start developing the new web application is editing pages, that located in `views/ejs/pages` and `views/ejs/templates/pages` folders.

## NPM Scripts
| Script                          | Description                                                                                                                                 |
|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
|`npm start`                      | This is the default script to start the engine, it will build and watch for changes in the source files.                                    |
|`npm run build`                  | This command will build a project located in the current folder.                                                                            |
|`npm run watch`                  | Watch for changes in source files during development. This script will also start the server that will spawn refresh events on any changes. |
|`npm run deploy`                 | Deploy files into AWS bucket.                                                                                                               |

The engine supports couple more commands, to get the whole list of them, simply run `node index.js --help` command.

## Troubleshooting
If you get any issues during the installation process or running commands, please check first our [Troubleshooting guide](https://github.com/oshidori-src/o.melon.webapp/wiki/Troubleshooting-guide) first and then you can open an [issue](https://github.com/oshidori-src/o.melon.webapp/issues), if you still have a problem.

Got any questions? Feel free to ask them on Twitter [@oshidori_tech](https://twitter.com/oshidori_tech) or by email [support@oshidori.co](mailto:support@oshidori.co).

## Contributing
Unfortunately, right now, we do not accept any pull requests in [this](https://github.com/oshidori-src/o.melon.webapp) project. But hey! This is open source project, so you can always make a fork of it. Also, if you have really important feature request, you can always open an [issue](https://github.com/oshidori-src/o.melon.webapp/issues) for this.

## License
This project is licensed under the Apache License, Version 2.0, please see the [LICENSE](https://github.com/oshidori-src/o.melon.webapp/blob/master/LICENSE) file for details.

Copyright &copy; 2018 Oshidori LLC [@oshidori_tech](https://twitter.com/oshidori_tech) [support@oshidori.co](mailto:support@oshidori.co)
