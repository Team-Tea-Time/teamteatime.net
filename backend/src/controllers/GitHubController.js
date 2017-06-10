import GitHub from 'github-api';

class GitHubController {
  constructor() {
    let credentials = {
      token: process.env.GITHUB_ACCESS_TOKEN
    };

    this.gh = new GitHub(credentials);

    this.getBranches = this.getBranches.bind(this);
    this.getTree = this.getTree.bind(this);
    this.getBlob = this.getBlob.bind(this);
  }

  getBranches(req, res) {
    this._getRepo(req.params.owner, req.params.repo)
      .listBranches((error, branches) => {
        if (error) throw error;
        res.json(branches);
      });
  }

  getTree(req, res) {
    this._getRepo(req.params.owner, req.params.repo)
      .getTree(req.params.sha, (error, tree) => {
        if (error) throw error;
        res.json(tree);
      });
  }

  getBlob(req, res) {
    this._getRepo(req.params.owner, req.params.repo)
      .getBlob(req.params.sha, (error, blob) => {
        if (error) throw error;
        if (req.query.rendered) {
          this.gh.getMarkdown().render({ text: blob, mode: 'gfm' }, (error, content) => {
            res.json(content);
          });
        } else {
          res.json(blob);
        }
      });
  }

  _getRepo(owner, name) {
    return this.gh.getRepo(owner, name);
  }
}

export default new GitHubController;
