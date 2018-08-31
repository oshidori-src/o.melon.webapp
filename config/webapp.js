/**
 * @license
 * Copyright 2018 Oshidori LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';


/**
 * @name webapp
 * @memberOf o.melon.config
 * @overview Web application configuration file that describes presets.
 */


module.exports.webapp = {
    name: 'o.melon.webapp',  // {string} App name
    hostname: 'localhost',  // {string} Hostname
    protocol: 'http',  // {string} Protocol - used in development mode
    port: '8008',  // {string} Port number - used in development mode
    homeURL: '',  // {string} Home URL - if empty, will be made from protocol, hostname and port
    pages: [  // {array} Custom list of webapp pages
        '/'
    ],
    notFoundPage: '/404.html',  // {string} 404 error page - will be used in development mode
    minify: false,  // {boolean} If true - all src files will be minified
    ejs: {
        ext: '.html'  // {string} Produced files extension to use in EJS template rendering
    },
    misc: {
        filesToCache: [  // {array} List of the files and pages to cache in webapp service worker
            '/',
            '/?homescreen=1',
            '/manifest.json'
        ],
        cache: true,  // {boolean} Cache files in webapp service worker
        cacheVersion: 1  // {integer} Cache version
    },
    img: {
        interlaced: true,  // {boolean} Optimization level for the image minify
        progressive: true,  // {boolean} Optimization level for the image minify
        optimizationLevel: 5,  // {integer} Optimization level for the image minify
    },
    sockets: {
        refreshOnUpdate: true  // {boolean} Refresh page on src files update - used in development mode
    }
};
