// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs?api-version=2018-08-01.7.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 21 Aug 2018 20:25:24 GMT',
  etag: '0x8D607A439F0E665',
  location: 'https://lchency4.westcentralus.batch.azure.com/jobs/job-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '061f2b6e-4927-4d9f-a0c2-f30801bb9ded',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/jobs/job-1',
  date: 'Tue, 21 Aug 2018 20:25:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs?api-version=2018-08-01.7.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 21 Aug 2018 20:25:24 GMT',
  etag: '0x8D607A439F0E665',
  location: 'https://lchency4.westcentralus.batch.azure.com/jobs/job-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '061f2b6e-4927-4d9f-a0c2-f30801bb9ded',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/jobs/job-1',
  date: 'Tue, 21 Aug 2018 20:25:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/JobWithAutoComplete/tasks?api-version=2018-08-01.7.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 21 Aug 2018 20:25:24 GMT',
  etag: '0x8D607A43A086071',
  location: 'https://lchency4.westcentralus.batch.azure.com/jobs/JobWithAutoComplete/tasks/TaskWithAutoComplete',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c10b9b66-0700-4a75-ba16-41575acee491',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/jobs/JobWithAutoComplete/tasks/TaskWithAutoComplete',
  date: 'Tue, 21 Aug 2018 20:25:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/JobWithAutoComplete/tasks?api-version=2018-08-01.7.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 21 Aug 2018 20:25:24 GMT',
  etag: '0x8D607A43A086071',
  location: 'https://lchency4.westcentralus.batch.azure.com/jobs/JobWithAutoComplete/tasks/TaskWithAutoComplete',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c10b9b66-0700-4a75-ba16-41575acee491',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/jobs/JobWithAutoComplete/tasks/TaskWithAutoComplete',
  date: 'Tue, 21 Aug 2018 20:25:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .get('/jobs/JobWithAutoComplete/tasks/TaskWithAutoComplete?api-version=2018-08-01.7.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"TaskWithAutoComplete\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/jobs/JobWithAutoComplete/tasks/TaskWithAutoComplete\",\"eTag\":\"0x8D607A43A086071\",\"creationTime\":\"2018-08-21T20:25:24.9162353Z\",\"lastModified\":\"2018-08-21T20:25:24.9162353Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-08-21T20:25:24.9162353Z\",\"commandLine\":\"echo Hello World\",\"userIdentity\":{\r\n    \"autoUser\":{\r\n      \"elevationLevel\":\"nonadmin\"\r\n    }\r\n  },\"exitConditions\":{\r\n    \"exitCodes\":[\r\n      {\r\n        \"code\":1,\"exitOptions\":{\r\n          \"jobAction\":\"none\",\"dependencyAction\":\"block\"\r\n        }\r\n      }\r\n    ],\"default\":{\r\n      \"jobAction\":\"terminate\",\"dependencyAction\":\"satisfy\"\r\n    }\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":0\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Tue, 21 Aug 2018 20:25:24 GMT',
  etag: '0x8D607A43A086071',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '513f53d1-530c-4c25-b7d3-118871a27902',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:25:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .get('/jobs/JobWithAutoComplete/tasks/TaskWithAutoComplete?api-version=2018-08-01.7.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"TaskWithAutoComplete\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/jobs/JobWithAutoComplete/tasks/TaskWithAutoComplete\",\"eTag\":\"0x8D607A43A086071\",\"creationTime\":\"2018-08-21T20:25:24.9162353Z\",\"lastModified\":\"2018-08-21T20:25:24.9162353Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-08-21T20:25:24.9162353Z\",\"commandLine\":\"echo Hello World\",\"userIdentity\":{\r\n    \"autoUser\":{\r\n      \"elevationLevel\":\"nonadmin\"\r\n    }\r\n  },\"exitConditions\":{\r\n    \"exitCodes\":[\r\n      {\r\n        \"code\":1,\"exitOptions\":{\r\n          \"jobAction\":\"none\",\"dependencyAction\":\"block\"\r\n        }\r\n      }\r\n    ],\"default\":{\r\n      \"jobAction\":\"terminate\",\"dependencyAction\":\"satisfy\"\r\n    }\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":0\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Tue, 21 Aug 2018 20:25:24 GMT',
  etag: '0x8D607A43A086071',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '513f53d1-530c-4c25-b7d3-118871a27902',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:25:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .delete('/jobs/JobWithAutoComplete?api-version=2018-08-01.7.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '615d3e8e-b7d7-45e2-a729-7385e8555aec',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:25:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .delete('/jobs/JobWithAutoComplete?api-version=2018-08-01.7.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '615d3e8e-b7d7-45e2-a729-7385e8555aec',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:25:25 GMT',
  connection: 'close' });
 return result; }]];