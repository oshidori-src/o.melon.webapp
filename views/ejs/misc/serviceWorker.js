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
 * @memberOf o.melon.views.ejs.misc
 * @overview Service worker.
 */


// Handle install event
self.addEventListener('install', function (event) {
    // <% if (om.webapp.misc.cache) { %>
    // Check if addAll is implemented in cache
    if (Cache.prototype.addAll) {
        event.waitUntil(
            // Create cache
            caches.open('<%= om.webapp.name %>:v<%= om.webapp.misc.cacheVersion %>').then(function (cache) {
                // Add all required resources in cache
                return cache.addAll([
                    // Add files to cache <% om.webapp.misc.filesToCache.forEach(function(file) { %>
                    '<%= file %>', // Add <%= file %> file<% }); %>
                ]);
            })
        );
    } else {
        console.error('Error: Caching in this browser is not supported.');
    }
    // <% } %>
});


// Handle fetch event
self.addEventListener('fetch', function (event) {
    // Validate that we use `only-if-cached` in pare with `same-origin` mode
    if (event.request.cache !== 'only-if-cached' || event.request.mode === 'same-origin') {
        event.respondWith(
            // Return cached objects if they are exists
            caches.match(event.request).then(function (response) {
                return response || fetch(event.request);
            })
        );
    }
});
