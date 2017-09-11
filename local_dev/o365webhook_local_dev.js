var devConfig = require('./dev_config');
var azureFunction = require('../O365WebHook/index');

// Local development query and body params
var debugQuery = {
    'code': 'This is the code'
};

var debugBody = {
    'name': 'Azure'
};

// Local development request object
var req = {
    originalUrl: 'http://original-azure-function-url',
    method: 'GET',
    query: debugQuery,
    headers: {
        connection: 'Keep-Alive',
        accept: 'application/json',
        host: 'original-azure-function-url',
        origin: 'https://functions.azure.com',
    },
    body: debugBody,
    rawBody: JSON.stringify(debugBody)
};

// Local development context
var debugContext = {
    invocationId: 'ID',
    bindings: {
        req
    },
    log: function () {
        var util = require('util');
        var val = util.format.apply(null, arguments);
        console.log(val);
    },
    done: function () {
        console.log('Response:', this.res);
    },
    res: {
        headers: {},
        status: 200
    }
};

// Real notifications from Azure pointing to real content. You have to most likely
// replace it due to expiration or permission reason.
var debugEvent = {
    body:
        [
            // {
            //   "contentType": "Audit.AzureActiveDirectory",
            //   "contentId": "20170813164449279008721$20170813164449279008721$audit_azureactivedirectory$Audit_AzureActiveDirectory$IsFromNotification",
            //   "contentUri": "https://manage.office.com/api/v1.0/bf8d32d3-1c13-4487-af02-80dba2236485/activity/feed/audit/20170813164449279008721$20170813164449279008721$audit_azureactivedirectory$Audit_AzureActiveDirectory$IsFromNotification",
            //   "notificationStatus": "Failed",
            //   "contentCreated": "2017-08-13T23:03:56.050Z",
            //   "notificationSent": "2017-08-13T23:03:56.050Z",
            //   "contentExpiration": "2017-08-20T16:44:49.279Z"
            // }
            // {
            //   "contentType": "Audit.AzureActiveDirectory",
            //   "contentId": "20170815224757748004716$20170815224757748004716$audit_azureactivedirectory$Audit_AzureActiveDirectory$IsFromNotification",
            //   "contentUri": "https://manage.office.com/api/v1.0/bf8d32d3-1c13-4487-af02-80dba2236485/activity/feed/audit/20170815224757748004716$20170815224757748004716$audit_azureactivedirectory$Audit_AzureActiveDirectory$IsFromNotification",
            //   "notificationStatus": "Failed",
            //   "contentCreated": "2017-08-17T12:31:25.653Z",
            //   "notificationSent": "2017-08-17T12:31:25.653Z",
            //   "contentExpiration": "2017-08-22T22:47:57.748Z"
            // },
           {
    "contentType": "Audit.Exchange",
    "contentId": "20170905123301777014849$20170905123301777014849$audit_exchange$Audit_Exchange$IsFromNotification",
    "contentUri": "https://manage.office.com/api/v1.0/bf8d32d3-1c13-4487-af02-80dba2236485/activity/feed/audit/20170905123301777014849$20170905123301777014849$audit_exchange$Audit_Exchange$IsFromNotification",
    "notificationStatus": "Succeeded",
    "contentCreated": "2017-09-05T12:37:27.163Z",
    "notificationSent": "2017-09-05T12:37:27.163Z",
    "contentExpiration": "2017-09-12T12:33:01.777Z"
  }
        ]
};


// Call the azureFunction locally with your testing params
azureFunction(debugContext, debugEvent);