var express = require('express');
var fileSystem = require('fs');
var bodyParser = require('body-parser');
var app = express();

// Global vars
var requestLog = [];

// App Setup
app.use(bodyParser.json());
app.listen(3000);

// Routing
app.get('/log', viewLog);
app.get('/hooks/:id', confirmNewHook);
app.post('/hooks/:id', processNotification);
app.get('/webhooks/:id', confirmNewHook);
app.post('/webhooks/:id', processNotification);

// Methods
function viewLog(request, response) {
    var logWithMostRecentFirst = requestLog.reverse();
    response.send(logWithMostRecentFirst);
}

function confirmNewHook(request, response) {
    var echo = request.param('echo') || "No echo parameter specified";
    var hookId = request.param('id');
    requestLog.push({
        description: "Request to confirm webhook",
        hookId: hookId,
        method: request.method,
        time: new Date(),
        headers: request.headers
    });
    response.send(echo);
} 

function processNotification(request, response) {
    var hookId = request.param('id');
    requestLog.push({
        description: "New notification",
        hookId: hookId,
        method: request.method,
        time: new Date(),
        headers: request.headers,
        body: request.body
    });
    response.send("Thank you, Mr. Webhook server.");
}

