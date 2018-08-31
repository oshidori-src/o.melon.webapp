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
 * @name global
 * @memberOf o.melon.config
 * @overview Global configuration file that describes global presets.
 */


module.exports = {
    type: 'webapp',  // {string} [webapp | core] Type of the application
    contentPath: {
        src: 'views/',  // {string} Source
        dist: 'dist/'  // {string} Destination
    },
    installPlugins: true,  // {boolean} Install plugins (view/lib) into destination folder
    cssEngine: 'sass',  // {string} [sass | less]  Css engine
    addRootSlash: true,  // {boolean} Add root slash into webapp paths and URLs
    devMode: true,  // {boolean} Enable development mode
    logLevel: 'info'  // {string} [error | warn | info | verbose | debug | silly] Level of displayed log messages
};
