const { Router } = require('express');
const gitWorker = require('./services/githubWorker');

const routes = new Router();

routes.get('/issues', async (req, res) => {
  res.json(await gitWorker.getIssues());
});
routes.get('/user');
routes.get('/repos', async (req, res) => {
  res.json(await gitWorker.getRepos());
});

module.exports = routes;
