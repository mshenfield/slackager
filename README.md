# Slackager
Manage your Github organization through Slack.

## Getting Set Up
__TODO__: (5)

## Contributing
Check [the issues](https://github.com/mshenfield/slackager/issues) and make a pull request. Bug fixes, feature requests, new issues or suggestions, documentation, and code are all welcome.

## Roadmap
We'll need:

1. ~~A Slack API call that checks to make sure the requesting user is an admin. My thought is that only Slack admin's should be able to add users to Github org. [Slack user.info Documentation](https://api.slack.com/methods/users.info)~~
2. A Github API call adding a member by username to the CodeForNashville organization: [Github API Add Member documentation](https://developer.github.com/v3/orgs/members/#add-or-update-organization-membership)
3. A small server with a POST endpoint to configure for Slack slash commands [Slack Slash Command Documentation](https://api.slack.com/slash-commands)
4. Heroku environment variables to configure: `ORGANIZATION_NAME`, `SLACKAGER_SLASH_COMMAND_TOKEN`, `GITHUB_PERSONAL_ACCESS_TOKEN`
5. Instructions on getting set up: setting up a [Slack slash command](https://api.slack.com/slash-commands), getting a [Slack authentication token](https://api.slack.com/web), adding a [Github personal access token](https://github.com/settings/tokens).
6. __Optional__ [Deploy to Heroku button](https://devcenter.heroku.com/articles/heroku-button)

These are all stubbed out in [index.js](index.js), [app.json](app.json), and this document if anyone wants to jump in on a specific portion. Grab me at the [Nashville Brigade Slack](nashvillebrigade.slack.com) if you're there or post an issue with your question on Github to discuss.

## License
[MIT](http://opensource.org/licenses/MIT)
