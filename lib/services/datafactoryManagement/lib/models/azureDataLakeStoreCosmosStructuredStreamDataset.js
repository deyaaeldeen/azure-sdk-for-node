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

const models = require('./index');

/**
 * Azure Data Lake Store Cosmos Structured Stream dataset.
 *
 * @extends models['Dataset']
 */
class AzureDataLakeStoreCosmosStructuredStreamDataset extends models['Dataset'] {
  /**
   * Create a AzureDataLakeStoreCosmosStructuredStreamDataset.
   * @property {object} folderPath Path to the folder in the Azure Data Lake
   * Store. Type: string (or Expression with resultType string).
   * @property {object} fileName The name of the file in the Azure Data Lake
   * Store. Type: string (or Expression with resultType string).
   * @property {object} [generatedFromActivity] Flag to indicate if this
   * dataset is been generated from Compilation Activity. Type: boolean (or
   * Expression with resultType boolean).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureDataLakeStoreCosmosStructuredStreamDataset
   *
   * @returns {object} metadata of AzureDataLakeStoreCosmosStructuredStreamDataset
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureDataLakeStoreCosmosStructuredStreamFile',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'Dataset',
        className: 'AzureDataLakeStoreCosmosStructuredStreamDataset',
        modelProperties: {
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          structure: {
            required: false,
            serializedName: 'structure',
            type: {
              name: 'Object'
            }
          },
          schema: {
            required: false,
            serializedName: 'schema',
            type: {
              name: 'Object'
            }
          },
          linkedServiceName: {
            required: true,
            serializedName: 'linkedServiceName',
            defaultValue: {},
            type: {
              name: 'Composite',
              className: 'LinkedServiceReference'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ParameterSpecificationElementType',
                  type: {
                    name: 'Composite',
                    className: 'ParameterSpecification'
                  }
              }
            }
          },
          annotations: {
            required: false,
            serializedName: 'annotations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          },
          folder: {
            required: false,
            serializedName: 'folder',
            type: {
              name: 'Composite',
              className: 'DatasetFolder'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          folderPath: {
            required: true,
            serializedName: 'typeProperties.folderPath',
            type: {
              name: 'Object'
            }
          },
          fileName: {
            required: true,
            serializedName: 'typeProperties.fileName',
            type: {
              name: 'Object'
            }
          },
          generatedFromActivity: {
            required: false,
            serializedName: 'typeProperties.generatedFromActivity',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureDataLakeStoreCosmosStructuredStreamDataset;