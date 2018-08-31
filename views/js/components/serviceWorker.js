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
 * @name serviceWorker
 * @memberOf o.melon.views.js.components
 * @overview Service workers installing script.
 */


// Check if current navigator have serviceWorker feature
if ('serviceWorker' in navigator) {

    // Register service worker
    navigator
        .serviceWorker.register('/serviceWorker.js')
        .then(function(registration) {

            // Update service worker
            registration.onupdatefound = function () {

                // Check if service worker is controlled
                if (navigator.serviceWorker.controller) {
                    var installing = registration.installing;

                    // We need to catch redundant state for the future implementations
                    registration.installing.onstatechange = function() {
                        if (installing.state === 'redundant') {
                            throw new Error('Error: Installing the service worker is redundant.');
                        }
                    };
                }

            };

    }).catch(function(err) {
        // Throw error if something goes wrong
        console.error('Error: Service working registration failed with error:', err);
    });

}
