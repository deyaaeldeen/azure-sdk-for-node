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
 * Managed identity for the resource.
 *
 */
class IdentityProperties {
  /**
   * Create a IdentityProperties.
   * @property {string} [principalId] The principal ID of resource identity.
   * @property {string} [tenantId] The tenant ID of resource.
   * @property {string} [type] The identity type. Possible values include:
   * 'SystemAssigned', 'UserAssigned', 'SystemAssigned, UserAssigned', 'None'
   * @property {object} [userAssignedIdentities] The list of user identities
   * associated with the resource. The user identity
   * dictionary key references will be ARM resource ids in the form:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
   * providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
  constructor() {
  }

  /**
   * Defines the metadata of IdentityProperties
   *
   * @returns {object} metadata of IdentityProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IdentityProperties',
      type: {
        name: 'Composite',
        className: 'IdentityProperties',
        modelProperties: {
          principalId: {
            required: false,
            serializedName: 'principalId',
            type: {
              name: 'String'
            }
          },
          tenantId: {
            required: false,
            serializedName: 'tenantId',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'Enum',
              allowedValues: [ 'SystemAssigned', 'UserAssigned', 'SystemAssigned, UserAssigned', 'None' ]
            }
          },
          userAssignedIdentities: {
            required: false,
            serializedName: 'userAssignedIdentities',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'UserIdentityPropertiesElementType',
                  type: {
                    name: 'Composite',
                    className: 'UserIdentityProperties'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = IdentityProperties;