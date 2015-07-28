#!/usr/bin/env node

var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: process.env['PORT'] || 3000 });

server.route({
	method: 'POST',
	path: '/',
	handler: function (request, reply) {
		// 3 Handle Slack slash command here. Return text that will be displayed to user
		var SLACKAGER_SLASH_COMMAND_TOKEN = process.env['SLACKAGER_SLASH_COMMAND_TOKEN'];
		var GITHUB_PERSONAL_ACCESS_TOKEN = process.env['GITHUB_PERSONAL_ACCESS_TOKEN'];
		var ORGANIZATION_NAME = process.env['ORGANIZATION_NAME'];
	}
});

server.start(function () {
	console.log('Server running at ', server.info.uri);
});

function isSlackUserAnAdmin(authToken, slackUserId){
	// 1 Get info on user and make sure they are an admin before executing command
}

function addUserToGithubOrganization(authToken, organizationName, username){
	// 2
}
