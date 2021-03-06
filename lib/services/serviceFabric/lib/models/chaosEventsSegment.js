/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Contains the list of Chaos events and the continuation token to get the next
 * segment.
 *
 */
class ChaosEventsSegment {
  /**
   * Create a ChaosEventsSegment.
   * @property {string} [continuationToken] The continuation token parameter is
   * used to obtain next set of results. The continuation token is included in
   * the response of the API when the results from the system do not fit in a
   * single response. When this value is passed to the next API call, the API
   * returns next set of results. If there are no further results, then the
   * continuation token is not included in the response.
   * @property {array} [history] List of Chaos events that meet the
   * user-supplied criteria.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ChaosEventsSegment
   *
   * @returns {object} metadata of ChaosEventsSegment
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ChaosEventsSegment',
      type: {
        name: 'Composite',
        className: 'ChaosEventsSegment',
        modelProperties: {
          continuationToken: {
            required: false,
            serializedName: 'ContinuationToken',
            type: {
              name: 'String'
            }
          },
          history: {
            required: false,
            serializedName: 'History',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ChaosEventWrapperElementType',
                  type: {
                    name: 'Composite',
                    className: 'ChaosEventWrapper'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ChaosEventsSegment;
