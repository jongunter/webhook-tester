# Webhook Tester
Super awesome thing for testing Asp.net webhooks custom senders. See more about that library here: https://github.com/aspnet/aspnetwebhooks

## Starting the server
1. Clone the repo.
2. Open the terminal in the directory.
3. Run `npm install` to install the dependencies.
4. Run `npm start`.
5. The test server will be running on http://localhost:3000 .

## Adding a webhook
Tell your Asp.net webhook server that the webhook URL is at `http://localhost:3000/webhooks/my-webhook` (replace "my-webhook" with whatever name you want).

## Viewing all webhook notifications
You can view a log anything that was send to the test server at http://localhost:3000/log . d