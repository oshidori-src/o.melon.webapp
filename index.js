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
 * @name o.melon.webapp Bootstrap
 * @overview Bootstrap for o.melon.webapp.
 */


// Read package.json
const omelonPackageInfo = require('./package');

// Define cmd options
const optionDefinitions = [
    {name: 'prod', type: Boolean, description: 'Use production environment.'},
    {name: 'dev', type: Boolean, description: 'Use development environment. It is used by default.'},
    {name: 'build', alias: 'b', type: Boolean, description: 'Job that build project.'},
    {name: 'watch', alias: 'w', type: Boolean, description: 'Job that serve project for development.'},
    {name: 'deploy', alias: 'd', type: Boolean, description: 'Job that builds and deploy project into AWS.'},
    {
        name: 'add',
        alias: 'a',
        type: String,
        description: 'Search for library by name and add it into the project.',
        typeLabel: '{underline <library>}',
        multiple: false
    },
    {
        name: 'remove',
        alias: 'r',
        type: String,
        description: 'Search for library by name and remove it from the project.',
        typeLabel: '{underline <library>}',
        multiple: false
    },
    {name: 'help', alias: 'h', type: Boolean, description: 'Display this usage guide.'},
];

// Load dependencies
const commandLineUsage = require('command-line-usage');
const commandLineArgs = require('command-line-args');

// Initialize usage and options
const sections = [
    {
        header: omelonPackageInfo.name,
        content: omelonPackageInfo.description
    },
    {
        header: 'Options',
        optionList: optionDefinitions,
    },
    {
        header: 'Notes',
        content: 'You can execute only one job by using options, however, build and watch jobs will be executed if no options were provided.'
    },
];
const usage = commandLineUsage(sections);
let options = {};

try {
    options = commandLineArgs(optionDefinitions, {stopAtFirstUnknown: true});
} catch (err) {
    console.log(usage);
    o.melon.logger.error('Failed to parse command line options.');
    process.exit(1);
}


// Production will be over development
if (options.prod) {
    // Setup production environment
    process.env.NODE_ENV = 'production';
} else if (options.dev) {
    // Setup development environment
    process.env.NODE_ENV = 'development';
}


// Load o.melon core
require('o.melon');

// Check if o.melon was successfully loaded
if (o && o.melon) {

    // Process provided options
    if (options.help) {
        // Call help
        console.log(usage);

    } else if (options.build) {
        // Perform build action
        o.melon.build();

    } else if (options.watch) {
        // Perform watch action
        o.melon.watch();

    } else if (options.deploy) {
        // Perform deploy action
        o.melon.deploy();

    } else if (options.add) {
        // Perform add action
        o.melon.add(options.add);

    } else if (options.remove) {
        // Perform remove action
        o.melon.remove(options.remove);

    } else {
        // Execute default actions
        // Run build action
        o.melon.build();

        // Run watch action
        o.melon.watch();
    }

} else {

    // Trigger critical error otherwise
    console.error("error: Can't initialize the o.melon engine.");
    process.exit(1);

}

