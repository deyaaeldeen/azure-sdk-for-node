/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * Prediction
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the LUISRuntimeClient.
 */
export interface Prediction {


    /**
     * Gets predictions for a given utterance, in the form of intents and entities.
     * The current maximum query size is 500 characters.
     *
     * @param {string} appId The LUIS application ID (Guid).
     *
     * @param {string} query The utterance to predict.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {number} [options.timezoneOffset] The timezone offset for the
     * location of the request.
     *
     * @param {boolean} [options.verbose] If true, return all intents instead of
     * just the top scoring intent.
     *
     * @param {boolean} [options.staging] Use the staging endpoint slot.
     *
     * @param {boolean} [options.spellCheck] Enable spell checking.
     *
     * @param {string} [options.bingSpellCheckSubscriptionKey] The subscription key
     * to use when enabling bing spell check
     *
     * @param {boolean} [options.log] Log query (default is true)
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LuisResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    resolveWithHttpOperationResponse(appId: string, query: string, options?: { timezoneOffset? : number, verbose? : boolean, staging? : boolean, spellCheck? : boolean, bingSpellCheckSubscriptionKey? : string, log? : boolean, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LuisResult>>;

    /**
     * Gets predictions for a given utterance, in the form of intents and entities.
     * The current maximum query size is 500 characters.
     *
     * @param {string} appId The LUIS application ID (Guid).
     *
     * @param {string} query The utterance to predict.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {number} [options.timezoneOffset] The timezone offset for the
     * location of the request.
     *
     * @param {boolean} [options.verbose] If true, return all intents instead of
     * just the top scoring intent.
     *
     * @param {boolean} [options.staging] Use the staging endpoint slot.
     *
     * @param {boolean} [options.spellCheck] Enable spell checking.
     *
     * @param {string} [options.bingSpellCheckSubscriptionKey] The subscription key
     * to use when enabling bing spell check
     *
     * @param {boolean} [options.log] Log query (default is true)
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LuisResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LuisResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LuisResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    resolve(appId: string, query: string, options?: { timezoneOffset? : number, verbose? : boolean, staging? : boolean, spellCheck? : boolean, bingSpellCheckSubscriptionKey? : string, log? : boolean, customHeaders? : { [headerName: string]: string; } }): Promise<models.LuisResult>;
    resolve(appId: string, query: string, callback: ServiceCallback<models.LuisResult>): void;
    resolve(appId: string, query: string, options: { timezoneOffset? : number, verbose? : boolean, staging? : boolean, spellCheck? : boolean, bingSpellCheckSubscriptionKey? : string, log? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LuisResult>): void;
}
