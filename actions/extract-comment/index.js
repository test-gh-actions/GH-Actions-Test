const core = require('@actions/core');

try {
  const event = JSON.parse(core.getInput('event', {required: true}));
  const commentBody = event['comment']['body'];
  const pattern = /!build \[\S*]\((\S*)\) (\S*)/;
  const matches = commentBody.match(pattern);

  const path = matches[1];
  const version = matches[2] || '';

  core.setOutput('path', path);
  core.setOutput('version', version);
} catch (error) {
  core.setFailed(error.message);
}

