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
 * Directory for virtual application.
 *
 */
class VirtualDirectory {
  /**
   * Create a VirtualDirectory.
   * @member {string} [virtualPath] Path to virtual application.
   * @member {string} [physicalPath] Physical path.
   */
  constructor() {
  }

  /**
   * Defines the metadata of VirtualDirectory
   *
   * @returns {object} metadata of VirtualDirectory
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualDirectory',
      type: {
        name: 'Composite',
        className: 'VirtualDirectory',
        modelProperties: {
          virtualPath: {
            required: false,
            serializedName: 'virtualPath',
            type: {
              name: 'String'
            }
          },
          physicalPath: {
            required: false,
            serializedName: 'physicalPath',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualDirectory;
