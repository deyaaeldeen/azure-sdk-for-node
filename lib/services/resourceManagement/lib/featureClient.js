/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

// 
// Copyright (c) Microsoft and contributors.  All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// 
// See the License for the specific language governing permissions and
// limitations under the License.
// 

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var util = require('util');
var azureCommon = require('azure-common');
var Service = azureCommon.Service;
var WebResource = azureCommon.WebResource;

var FeatureClient = ( /** @lends FeatureClient */ function() {
  /**
   * @class
   * Initializes a new instance of the FeatureClient class.
   * @constructor
   * 
   * @param {SubscriptionCloudCredentials} credentials Gets subscription
   * credentials which uniquely identify Microsoft Azure subscription. The
   * subscription ID forms part of the URI for every service call.
   * 
   * @param {string} [credentials.subscriptionId]
   * 
   * @param {string} [baseUri] Gets the URI used as the base for all cloud
   * service requests.
   * 
   * @param {Array} filters
   */
  function FeatureClient(credentials, baseUri, filters) {
    if (credentials === null || credentials === undefined) {
      throw new Error('credentials cannot be null.');
    }
    
    FeatureClient['super_'].call(this, credentials, filters);
    
    this.credentials = credentials;
    this.baseUri = baseUri;
    if (this.baseUri === null || this.baseUri === undefined) {
      this.baseUri = 'https://management.azure.com/';
    }
    if (this.apiVersion === null || this.apiVersion === undefined) {
      this.apiVersion = '2015-12-01';
    }
    if (this.longRunningOperationInitialTimeout === null || this.longRunningOperationInitialTimeout === undefined) {
      this.longRunningOperationInitialTimeout = -1;
    }
    if (this.longRunningOperationRetryTimeout === null || this.longRunningOperationRetryTimeout === undefined) {
      this.longRunningOperationRetryTimeout = -1;
    }
    /**
     * Provides an instance of the [Features](-Features.html) object.
     * @type {object}
     */
    this.features = new Features(this);
  }
  
  util.inherits(FeatureClient, Service);
  
  
  return FeatureClient;
})();
exports.FeatureClient = FeatureClient;

var Features = ( /** @lends Features */ function() {
  /**
   * @class
   * Operations for managing preview features.
   * __NOTE__: An instance of this class is automatically created for an
   * instance of the [FeatureClient] {@link FeatureClient~FeatureClient}.
   * See [features] {@link FeatureClient~FeatureClient#features}.
   * Initializes a new instance of the Features class.
   * @constructor
   * 
   * @param {FeatureClient} client Reference to the service client.
   */
  function Features(client) {
    this.client = client;
  }
  
  /**
   * Get all features under the subscription.
   * 
   * @param {string} resourceProviderNamespace Namespace of the resource
   * provider.
   * 
   * @param {string} featureName Previewed feature name in the resource
   * provider.
   * 
   * @param {function} callback
   * 
   * @returns {Stream} The response stream.
   */
  Features.prototype.get = function(resourceProviderNamespace, featureName, callback) {
    if (callback === null || callback === undefined) {
      throw new Error('callback cannot be null.');
    }
    // Validate
    if (resourceProviderNamespace === null || resourceProviderNamespace === undefined) {
      return callback(new Error('resourceProviderNamespace cannot be null.'));
    }
    if (featureName === null || featureName === undefined) {
      return callback(new Error('featureName cannot be null.'));
    }
    
    // Tracing
    
    // Construct URL
    var url2 = '';
    url2 = url2 + '/subscriptions/';
    if (this.client.credentials.subscriptionId !== null && this.client.credentials.subscriptionId !== undefined) {
      url2 = url2 + encodeURIComponent(this.client.credentials.subscriptionId);
    }
    url2 = url2 + '/providers/Microsoft.Features/providers/';
    url2 = url2 + encodeURIComponent(resourceProviderNamespace);
    url2 = url2 + '/features/';
    url2 = url2 + encodeURIComponent(featureName);
    var queryParameters = [];
    queryParameters.push('api-version=2015-12-01');
    if (queryParameters.length > 0) {
      url2 = url2 + '?' + queryParameters.join('&');
    }
    var baseUrl = this.client.baseUri;
    // Trim '/' character from the end of baseUrl and beginning of url.
    if (baseUrl[baseUrl.length - 1] === '/') {
      baseUrl = baseUrl.substring(0, (baseUrl.length - 1) + 0);
    }
    if (url2[0] === '/') {
      url2 = url2.substring(1);
    }
    url2 = baseUrl + '/' + url2;
    url2 = url2.replace(' ', '%20');
    
    // Create HTTP transport objects
    var httpRequest = new WebResource();
    httpRequest.method = 'GET';
    httpRequest.headers = {};
    httpRequest.url = url2;
    
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json';
    
    // Send Request
    return this.client.pipeline(httpRequest, function (err, response, body) {
      if (err !== null && err !== undefined) {
        return callback(err);
      }
      var statusCode = response.statusCode;
      if (statusCode !== 200) {
        var error = new Error(body);
        error.statusCode = response.statusCode;
        return callback(error);
      }
      
      // Create Result
      var result = null;
      // Deserialize Response
      if (statusCode === 200) {
        var responseContent = body;
        result = {};
        var responseDoc = null;
        if (responseContent) {
          responseDoc = JSON.parse(responseContent);
        }
        
        if (responseDoc !== null && responseDoc !== undefined) {
          var nameValue = responseDoc['name'];
          if (nameValue !== null && nameValue !== undefined) {
            var nameInstance = nameValue;
            result.name = nameInstance;
          }
          
          var propertiesValue = responseDoc['properties'];
          if (propertiesValue !== null && propertiesValue !== undefined) {
            var propertiesInstance = {};
            result.properties = propertiesInstance;
            
            var stateValue = propertiesValue['state'];
            if (stateValue !== null && stateValue !== undefined) {
              var stateInstance = stateValue;
              propertiesInstance.state = stateInstance;
            }
          }
          
          var idValue = responseDoc['id'];
          if (idValue !== null && idValue !== undefined) {
            var idInstance = idValue;
            result.id = idInstance;
          }
          
          var typeValue = responseDoc['type'];
          if (typeValue !== null && typeValue !== undefined) {
            var typeInstance = typeValue;
            result.type = typeInstance;
          }
        }
        
      }
      result.statusCode = statusCode;
      result.requestId = response.headers['x-ms-request-id'];
      
      return callback(null, result);
    });
  };
  
  /**
   * Gets a list of previewed features of a resource provider.
   * 
   * @param {string} resourceProviderNamespace The namespace of the resource
   * provider.
   * 
   * @param {function} callback
   * 
   * @returns {Stream} The response stream.
   */
  Features.prototype.list = function(resourceProviderNamespace, callback) {
    if (callback === null || callback === undefined) {
      throw new Error('callback cannot be null.');
    }
    // Validate
    if (resourceProviderNamespace === null || resourceProviderNamespace === undefined) {
      return callback(new Error('resourceProviderNamespace cannot be null.'));
    }
    
    // Tracing
    
    // Construct URL
    var url2 = '';
    url2 = url2 + '/subscriptions/';
    if (this.client.credentials.subscriptionId !== null && this.client.credentials.subscriptionId !== undefined) {
      url2 = url2 + encodeURIComponent(this.client.credentials.subscriptionId);
    }
    url2 = url2 + '/providers/Microsoft.Features/providers/';
    url2 = url2 + encodeURIComponent(resourceProviderNamespace);
    url2 = url2 + '/features';
    var queryParameters = [];
    queryParameters.push('api-version=2015-12-01');
    if (queryParameters.length > 0) {
      url2 = url2 + '?' + queryParameters.join('&');
    }
    var baseUrl = this.client.baseUri;
    // Trim '/' character from the end of baseUrl and beginning of url.
    if (baseUrl[baseUrl.length - 1] === '/') {
      baseUrl = baseUrl.substring(0, (baseUrl.length - 1) + 0);
    }
    if (url2[0] === '/') {
      url2 = url2.substring(1);
    }
    url2 = baseUrl + '/' + url2;
    url2 = url2.replace(' ', '%20');
    
    // Create HTTP transport objects
    var httpRequest = new WebResource();
    httpRequest.method = 'GET';
    httpRequest.headers = {};
    httpRequest.url = url2;
    
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    
    // Send Request
    return this.client.pipeline(httpRequest, function (err, response, body) {
      if (err !== null && err !== undefined) {
        return callback(err);
      }
      var statusCode = response.statusCode;
      if (statusCode !== 200) {
        var error = new Error(body);
        error.statusCode = response.statusCode;
        return callback(error);
      }
      
      // Create Result
      var result = null;
      // Deserialize Response
      if (statusCode === 200) {
        var responseContent = body;
        result = { features: [] };
        var responseDoc = null;
        if (responseContent) {
          responseDoc = JSON.parse(responseContent);
        }
        
        if (responseDoc !== null && responseDoc !== undefined) {
          var valueArray = responseDoc['value'];
          if (valueArray !== null && valueArray !== undefined) {
            for (var loweredIndex1 = 0; loweredIndex1 < valueArray.length; loweredIndex1 = loweredIndex1 + 1) {
              var valueValue = valueArray[loweredIndex1];
              var featureResponseInstance = {};
              result.features.push(featureResponseInstance);
              
              var nameValue = valueValue['name'];
              if (nameValue !== null && nameValue !== undefined) {
                var nameInstance = nameValue;
                featureResponseInstance.name = nameInstance;
              }
              
              var propertiesValue = valueValue['properties'];
              if (propertiesValue !== null && propertiesValue !== undefined) {
                var propertiesInstance = {};
                featureResponseInstance.properties = propertiesInstance;
                
                var stateValue = propertiesValue['state'];
                if (stateValue !== null && stateValue !== undefined) {
                  var stateInstance = stateValue;
                  propertiesInstance.state = stateInstance;
                }
              }
              
              var idValue = valueValue['id'];
              if (idValue !== null && idValue !== undefined) {
                var idInstance = idValue;
                featureResponseInstance.id = idInstance;
              }
              
              var typeValue = valueValue['type'];
              if (typeValue !== null && typeValue !== undefined) {
                var typeInstance = typeValue;
                featureResponseInstance.type = typeInstance;
              }
            }
          }
          
          var nextLinkValue = responseDoc['nextLink'];
          if (nextLinkValue !== null && nextLinkValue !== undefined) {
            var nextLinkInstance = nextLinkValue;
            result.nextLink = nextLinkInstance;
          }
        }
        
      }
      result.statusCode = statusCode;
      result.requestId = response.headers['x-ms-request-id'];
      
      return callback(null, result);
    });
  };
  
  /**
   * Gets a list of previewed features for all the providers in the current
   * subscription.
   * 
   * @param {function} callback
   * 
   * @returns {Stream} The response stream.
   */
  Features.prototype.listAll = function(callback) {
    if (callback === null || callback === undefined) {
      throw new Error('callback cannot be null.');
    }
    // Validate
    
    // Tracing
    
    // Construct URL
    var url2 = '';
    url2 = url2 + '/subscriptions/';
    if (this.client.credentials.subscriptionId !== null && this.client.credentials.subscriptionId !== undefined) {
      url2 = url2 + encodeURIComponent(this.client.credentials.subscriptionId);
    }
    url2 = url2 + '/providers/Microsoft.Features/features';
    var queryParameters = [];
    queryParameters.push('api-version=2015-12-01');
    if (queryParameters.length > 0) {
      url2 = url2 + '?' + queryParameters.join('&');
    }
    var baseUrl = this.client.baseUri;
    // Trim '/' character from the end of baseUrl and beginning of url.
    if (baseUrl[baseUrl.length - 1] === '/') {
      baseUrl = baseUrl.substring(0, (baseUrl.length - 1) + 0);
    }
    if (url2[0] === '/') {
      url2 = url2.substring(1);
    }
    url2 = baseUrl + '/' + url2;
    url2 = url2.replace(' ', '%20');
    
    // Create HTTP transport objects
    var httpRequest = new WebResource();
    httpRequest.method = 'GET';
    httpRequest.headers = {};
    httpRequest.url = url2;
    
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    
    // Send Request
    return this.client.pipeline(httpRequest, function (err, response, body) {
      if (err !== null && err !== undefined) {
        return callback(err);
      }
      var statusCode = response.statusCode;
      if (statusCode !== 200) {
        var error = new Error(body);
        error.statusCode = response.statusCode;
        return callback(error);
      }
      
      // Create Result
      var result = null;
      // Deserialize Response
      if (statusCode === 200) {
        var responseContent = body;
        result = { features: [] };
        var responseDoc = null;
        if (responseContent) {
          responseDoc = JSON.parse(responseContent);
        }
        
        if (responseDoc !== null && responseDoc !== undefined) {
          var valueArray = responseDoc['value'];
          if (valueArray !== null && valueArray !== undefined) {
            for (var loweredIndex1 = 0; loweredIndex1 < valueArray.length; loweredIndex1 = loweredIndex1 + 1) {
              var valueValue = valueArray[loweredIndex1];
              var featureResponseInstance = {};
              result.features.push(featureResponseInstance);
              
              var nameValue = valueValue['name'];
              if (nameValue !== null && nameValue !== undefined) {
                var nameInstance = nameValue;
                featureResponseInstance.name = nameInstance;
              }
              
              var propertiesValue = valueValue['properties'];
              if (propertiesValue !== null && propertiesValue !== undefined) {
                var propertiesInstance = {};
                featureResponseInstance.properties = propertiesInstance;
                
                var stateValue = propertiesValue['state'];
                if (stateValue !== null && stateValue !== undefined) {
                  var stateInstance = stateValue;
                  propertiesInstance.state = stateInstance;
                }
              }
              
              var idValue = valueValue['id'];
              if (idValue !== null && idValue !== undefined) {
                var idInstance = idValue;
                featureResponseInstance.id = idInstance;
              }
              
              var typeValue = valueValue['type'];
              if (typeValue !== null && typeValue !== undefined) {
                var typeInstance = typeValue;
                featureResponseInstance.type = typeInstance;
              }
            }
          }
          
          var nextLinkValue = responseDoc['nextLink'];
          if (nextLinkValue !== null && nextLinkValue !== undefined) {
            var nextLinkInstance = nextLinkValue;
            result.nextLink = nextLinkInstance;
          }
        }
        
      }
      result.statusCode = statusCode;
      result.requestId = response.headers['x-ms-request-id'];
      
      return callback(null, result);
    });
  };
  
  /**
   * Gets a list of previewed features of a subscription.
   * 
   * @param {string} nextLink NextLink from the previous successful call to
   * List operation.
   * 
   * @param {function} callback
   * 
   * @returns {Stream} The response stream.
   */
  Features.prototype.listAllNext = function(nextLink, callback) {
    if (callback === null || callback === undefined) {
      throw new Error('callback cannot be null.');
    }
    // Validate
    if (nextLink === null || nextLink === undefined) {
      return callback(new Error('nextLink cannot be null.'));
    }
    
    // Tracing
    
    // Construct URL
    var url2 = '';
    url2 = url2 + nextLink;
    url2 = url2.replace(' ', '%20');
    
    // Create HTTP transport objects
    var httpRequest = new WebResource();
    httpRequest.method = 'GET';
    httpRequest.headers = {};
    httpRequest.url = url2;
    
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    
    // Send Request
    return this.client.pipeline(httpRequest, function (err, response, body) {
      if (err !== null && err !== undefined) {
        return callback(err);
      }
      var statusCode = response.statusCode;
      if (statusCode !== 200) {
        var error = new Error(body);
        error.statusCode = response.statusCode;
        return callback(error);
      }
      
      // Create Result
      var result = null;
      // Deserialize Response
      if (statusCode === 200) {
        var responseContent = body;
        result = { features: [] };
        var responseDoc = null;
        if (responseContent) {
          responseDoc = JSON.parse(responseContent);
        }
        
        if (responseDoc !== null && responseDoc !== undefined) {
          var valueArray = responseDoc['value'];
          if (valueArray !== null && valueArray !== undefined) {
            for (var loweredIndex1 = 0; loweredIndex1 < valueArray.length; loweredIndex1 = loweredIndex1 + 1) {
              var valueValue = valueArray[loweredIndex1];
              var featureResponseInstance = {};
              result.features.push(featureResponseInstance);
              
              var nameValue = valueValue['name'];
              if (nameValue !== null && nameValue !== undefined) {
                var nameInstance = nameValue;
                featureResponseInstance.name = nameInstance;
              }
              
              var propertiesValue = valueValue['properties'];
              if (propertiesValue !== null && propertiesValue !== undefined) {
                var propertiesInstance = {};
                featureResponseInstance.properties = propertiesInstance;
                
                var stateValue = propertiesValue['state'];
                if (stateValue !== null && stateValue !== undefined) {
                  var stateInstance = stateValue;
                  propertiesInstance.state = stateInstance;
                }
              }
              
              var idValue = valueValue['id'];
              if (idValue !== null && idValue !== undefined) {
                var idInstance = idValue;
                featureResponseInstance.id = idInstance;
              }
              
              var typeValue = valueValue['type'];
              if (typeValue !== null && typeValue !== undefined) {
                var typeInstance = typeValue;
                featureResponseInstance.type = typeInstance;
              }
            }
          }
          
          var nextLinkValue = responseDoc['nextLink'];
          if (nextLinkValue !== null && nextLinkValue !== undefined) {
            var nextLinkInstance = nextLinkValue;
            result.nextLink = nextLinkInstance;
          }
        }
        
      }
      result.statusCode = statusCode;
      result.requestId = response.headers['x-ms-request-id'];
      
      return callback(null, result);
    });
  };
  
  /**
   * Gets a list of previewed features of a resource provider.
   * 
   * @param {string} nextLink NextLink from the previous successful call to
   * List operation.
   * 
   * @param {function} callback
   * 
   * @returns {Stream} The response stream.
   */
  Features.prototype.listNext = function(nextLink, callback) {
    if (callback === null || callback === undefined) {
      throw new Error('callback cannot be null.');
    }
    // Validate
    if (nextLink === null || nextLink === undefined) {
      return callback(new Error('nextLink cannot be null.'));
    }
    
    // Tracing
    
    // Construct URL
    var url2 = '';
    url2 = url2 + nextLink;
    url2 = url2.replace(' ', '%20');
    
    // Create HTTP transport objects
    var httpRequest = new WebResource();
    httpRequest.method = 'GET';
    httpRequest.headers = {};
    httpRequest.url = url2;
    
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    
    // Send Request
    return this.client.pipeline(httpRequest, function (err, response, body) {
      if (err !== null && err !== undefined) {
        return callback(err);
      }
      var statusCode = response.statusCode;
      if (statusCode !== 200) {
        var error = new Error(body);
        error.statusCode = response.statusCode;
        return callback(error);
      }
      
      // Create Result
      var result = null;
      // Deserialize Response
      if (statusCode === 200) {
        var responseContent = body;
        result = { features: [] };
        var responseDoc = null;
        if (responseContent) {
          responseDoc = JSON.parse(responseContent);
        }
        
        if (responseDoc !== null && responseDoc !== undefined) {
          var valueArray = responseDoc['value'];
          if (valueArray !== null && valueArray !== undefined) {
            for (var loweredIndex1 = 0; loweredIndex1 < valueArray.length; loweredIndex1 = loweredIndex1 + 1) {
              var valueValue = valueArray[loweredIndex1];
              var featureResponseInstance = {};
              result.features.push(featureResponseInstance);
              
              var nameValue = valueValue['name'];
              if (nameValue !== null && nameValue !== undefined) {
                var nameInstance = nameValue;
                featureResponseInstance.name = nameInstance;
              }
              
              var propertiesValue = valueValue['properties'];
              if (propertiesValue !== null && propertiesValue !== undefined) {
                var propertiesInstance = {};
                featureResponseInstance.properties = propertiesInstance;
                
                var stateValue = propertiesValue['state'];
                if (stateValue !== null && stateValue !== undefined) {
                  var stateInstance = stateValue;
                  propertiesInstance.state = stateInstance;
                }
              }
              
              var idValue = valueValue['id'];
              if (idValue !== null && idValue !== undefined) {
                var idInstance = idValue;
                featureResponseInstance.id = idInstance;
              }
              
              var typeValue = valueValue['type'];
              if (typeValue !== null && typeValue !== undefined) {
                var typeInstance = typeValue;
                featureResponseInstance.type = typeInstance;
              }
            }
          }
          
          var nextLinkValue = responseDoc['nextLink'];
          if (nextLinkValue !== null && nextLinkValue !== undefined) {
            var nextLinkInstance = nextLinkValue;
            result.nextLink = nextLinkInstance;
          }
        }
        
      }
      result.statusCode = statusCode;
      result.requestId = response.headers['x-ms-request-id'];
      
      return callback(null, result);
    });
  };
  
  /**
   * Registers for a previewed feature of a resource provider.
   * 
   * @param {string} resourceProviderNamespace Namespace of the resource
   * provider.
   * 
   * @param {string} featureName Previewed feature name in the resource
   * provider.
   * 
   * @param {function} callback
   * 
   * @returns {Stream} The response stream.
   */
  Features.prototype.register = function(resourceProviderNamespace, featureName, callback) {
    if (callback === null || callback === undefined) {
      throw new Error('callback cannot be null.');
    }
    // Validate
    if (resourceProviderNamespace === null || resourceProviderNamespace === undefined) {
      return callback(new Error('resourceProviderNamespace cannot be null.'));
    }
    if (featureName === null || featureName === undefined) {
      return callback(new Error('featureName cannot be null.'));
    }
    
    // Tracing
    
    // Construct URL
    var url2 = '';
    url2 = url2 + '/subscriptions/';
    if (this.client.credentials.subscriptionId !== null && this.client.credentials.subscriptionId !== undefined) {
      url2 = url2 + encodeURIComponent(this.client.credentials.subscriptionId);
    }
    url2 = url2 + '/providers/Microsoft.Features/providers/';
    url2 = url2 + encodeURIComponent(resourceProviderNamespace);
    url2 = url2 + '/features/';
    url2 = url2 + encodeURIComponent(featureName);
    url2 = url2 + '/register';
    var queryParameters = [];
    queryParameters.push('api-version=2015-12-01');
    if (queryParameters.length > 0) {
      url2 = url2 + '?' + queryParameters.join('&');
    }
    var baseUrl = this.client.baseUri;
    // Trim '/' character from the end of baseUrl and beginning of url.
    if (baseUrl[baseUrl.length - 1] === '/') {
      baseUrl = baseUrl.substring(0, (baseUrl.length - 1) + 0);
    }
    if (url2[0] === '/') {
      url2 = url2.substring(1);
    }
    url2 = baseUrl + '/' + url2;
    url2 = url2.replace(' ', '%20');
    
    // Create HTTP transport objects
    var httpRequest = new WebResource();
    httpRequest.method = 'POST';
    httpRequest.headers = {};
    httpRequest.url = url2;
    
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json';
    
    // Send Request
    return this.client.pipeline(httpRequest, function (err, response, body) {
      if (err !== null && err !== undefined) {
        return callback(err);
      }
      var statusCode = response.statusCode;
      if (statusCode !== 200) {
        var error = new Error(body);
        error.statusCode = response.statusCode;
        return callback(error);
      }
      
      // Create Result
      var result = null;
      // Deserialize Response
      if (statusCode === 200) {
        var responseContent = body;
        result = {};
        var responseDoc = null;
        if (responseContent) {
          responseDoc = JSON.parse(responseContent);
        }
        
        if (responseDoc !== null && responseDoc !== undefined) {
          var nameValue = responseDoc['name'];
          if (nameValue !== null && nameValue !== undefined) {
            var nameInstance = nameValue;
            result.name = nameInstance;
          }
          
          var propertiesValue = responseDoc['properties'];
          if (propertiesValue !== null && propertiesValue !== undefined) {
            var propertiesInstance = {};
            result.properties = propertiesInstance;
            
            var stateValue = propertiesValue['state'];
            if (stateValue !== null && stateValue !== undefined) {
              var stateInstance = stateValue;
              propertiesInstance.state = stateInstance;
            }
          }
          
          var idValue = responseDoc['id'];
          if (idValue !== null && idValue !== undefined) {
            var idInstance = idValue;
            result.id = idInstance;
          }
          
          var typeValue = responseDoc['type'];
          if (typeValue !== null && typeValue !== undefined) {
            var typeInstance = typeValue;
            result.type = typeInstance;
          }
        }
        
      }
      result.statusCode = statusCode;
      result.requestId = response.headers['x-ms-request-id'];
      
      return callback(null, result);
    });
  };
  
  return Features;
})();