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
 * @class
 * Initializes a new instance of the RedisFirewallRuleListResult class.
 * @constructor
 * The response of list firewall rules Redis operation.
 *
 * @member {string} [nextLink] Link for next set of locations.
 *
 */
class RedisFirewallRuleListResult extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RedisFirewallRuleListResult
   *
   * @returns {object} metadata of RedisFirewallRuleListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RedisFirewallRuleListResult',
      type: {
        name: 'Composite',
        className: 'RedisFirewallRuleListResult',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RedisFirewallRuleElementType',
                  type: {
                    name: 'Composite',
                    className: 'RedisFirewallRule'
                  }
              }
            }
          },
          nextLink: {
            required: false,
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

module.exports = RedisFirewallRuleListResult;