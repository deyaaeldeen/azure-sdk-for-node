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
 * List of locations where ASC saves your data
 */
class AscLocationList extends Array {
  /**
   * Create a AscLocationList.
   * @member {string} [nextLink] The URI to fetch the next page.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AscLocationList
   *
   * @returns {object} metadata of AscLocationList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AscLocationList',
      type: {
        name: 'Composite',
        className: 'AscLocationList',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AscLocationElementType',
                  type: {
                    name: 'Composite',
                    className: 'AscLocation'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AscLocationList;