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
 * The job error information containing the list of job errors.
 *
 */
class JobErrorDetails {
  /**
   * Create a JobErrorDetails.
   * @property {array} [errorDetails] The error details.
   * @property {string} [code] The code intended for programmatic access.
   * @property {string} [message] The message that describes the error in
   * detail.
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobErrorDetails
   *
   * @returns {object} metadata of JobErrorDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobErrorDetails',
      type: {
        name: 'Composite',
        className: 'JobErrorDetails',
        modelProperties: {
          errorDetails: {
            required: false,
            readOnly: true,
            serializedName: 'errorDetails',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JobErrorItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'JobErrorItem'
                  }
              }
            }
          },
          code: {
            required: false,
            readOnly: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            readOnly: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = JobErrorDetails;