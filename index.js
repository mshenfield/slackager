#!/usr/bin/env node

var Hapi = require('hapi');
var slackey = require('slackey');

var server = new Hapi.Server();
server.connection({ port: process.env['PORT'] || 3000 });

server.route({
	method: 'POST',
	path: '/',
	handler: function (request, reply) {
		// 3 Handle Slack slash command here. Return text that will be displayed to user
		var SLACKAGER_SLASH_COMMAND_TOKEN = process.env['SLACKAGER_SLASH_COMMAND_TOKEN'];
		var SLACK_AUTHENTICATION_TOKEN = process.env['SLACK_AUTHENTICATION_TOKEN'];
		var GITHUB_PERSONAL_ACCESS_TOKEN = process.env['GITHUB_PERSONAL_ACCESS_TOKEN'];
		var ORGANIZATION_NAME = process.env['ORGANIZATION_NAME'];

		// 1 Get info on user and make sure they are an admin before executing command
		isSlackUserAnAdmin(SLACK_AUTHENTICATION_TOKEN, request.payload.user_id, function(err, isAdmin) {
				if (err) {
					reply('An error occured while making sure you are a Slack administrator. Check the Slack Web API at https://api.slack.com/web '
					+ 'to verify your Authentication token matches the SLACK_AUTHENTICATION_TOKEN environment variable on your slackager instance. '
					+ ' Here is the descriptive message returned from the Slack Web API when requesting information about you: \n' + err.message);
					return;
				}

				if (!isAdmin) {
					reply('You are not authorized to add Github users through slackager! Only Slack admins have permission to add Github users.');
					return;
				}
		});
	}
});

server.start(function () {
	console.log('Server running at ', server.info.uri);
});

// Make an API call to gather information about the user.  The callback should be a function
// with the signature function(err, isAdmin), where err is the error object returned from
// the Slack Web API (https://api.slack.com/web), and isAdmin is a boolean value indicating
// whether the slackUserId is an admin of their Slack team
function isSlackUserAnAdmin(authToken, slackUserId, callback){
	if (!authToken) {
		callback({message: "Authentication token is required to access Slack Web API"});
		return;
	}

	slack = slackey.getAPIClient(authToken);
	slack.send('users.info', {user: slackUserId}, function(err, response) {
		if (err) {
			calback(err, false);
			return;
		}

		callback(null, response.user.is_admin);
		return;
	});
}

function addUserToGithubOrganization(authToken, organizationName, username){
	// 2
}
