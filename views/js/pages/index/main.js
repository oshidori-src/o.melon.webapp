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
 * @name index
 * @memberOf o.melon.views.js.pages.index
 * @overview JavaScript that implements paralax effect on index page.
 */


// Wait for document, because jquery will work only after load
$( document ).ready(function() {
    $('.mdl-layout__content').scroll(function() {
        // Calculate parallax background effect values
        var scrollPosition = $('.mdl-layout__content').scrollTop();
        var scrollLimit = $('.mdl-layout__content').prop('scrollHeight');
        var parallaxOffset = 0.75;
        var initialOffset = 10;
        var scrollPositionInPercent = Math.round(((scrollPosition / scrollLimit) * 100 * parallaxOffset) + initialOffset);

        // Apply background paralax effect
        $('.mdl-layout').css('background-position', scrollPosition + '50% ' + scrollPositionInPercent + '%');
    });
});
