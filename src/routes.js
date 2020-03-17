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
routes.post('/repoissues', async (req, res) => {
  const repoName = req.body.name;
  res.json(await gitWorker.getRepoIssues(repoName));
});

module.exports = routes;
