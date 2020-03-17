const axios = require('axios');

class GithubWorker {
  async getIssues() {
    const issues = await axios
      .get('https://api.github.com/repos/phfedev/TotalGit/issues')
      .then(response => {
        console.log(response.data);

        return response.data;
      })
      .catch(error => {
        // handle error
        console.log(error);
        return error;
      });
    return issues;
  }

  async getRepos() {
    const reposList = [];
    const repos = await axios
      .get('https://api.github.com/users/phfedev/repos')
      .then(response => response.data);

    repos.map(resp => reposList.push(resp.name));

    return reposList;
  }
}

module.exports = new GithubWorker();
