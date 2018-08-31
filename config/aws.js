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
 * @name aws
 * @memberOf o.melon.config
 * @overview AWS configuration that used in deploy action.
 */


module.exports.aws = {
    cloudFrontDistributionId: '',  // {string} CloudFront distribution ID for invalidation
    region: 'us-east-2',  // {string} Region
    params: {
        Bucket: ''  // {string} Bucket name
    },
    accessKeyId: '',  // {string} IAM Access key ID
    secretAccessKey: '',  // {string} IAM Secret Access key
    profile: 'default'  // {string} Default AWS profile
};
