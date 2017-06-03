import Project from '../models/Project';
import ProjectCategory from '../models/ProjectCategory';

class ProjectsController {
  constructor() {
    this.list = this.list.bind(this);
  }

  list(req, res) {
    this.paginate(req, res);
  }

  get(req, res) {
    Project.findById(req.params.id)
      .populate('category')
      .exec((error, project) => {
        if (error) throw error;
        res.json(project);
      });
  }

  create(req, res) {
    req.checkBody('name', 'Give this project a name').notEmpty();
    req.checkBody('category_id', 'Select a category').notEmpty();
    req.checkBody('summary', 'Write a summary').notEmpty();

    req.getValidationResult().then((result) => {
      if (!result.isEmpty()) {
        res.status(400).json(result.mapped());
        return;
      }

      ProjectCategory.findById(req.body.category_id)
        .exec((error, category) => {
          if (error) throw error;

          Project.create({
            name: req.body.name,
            category: req.body.category_id,
            summary: req.body.summary,
            url: req.body.url,
            documentation_repo: req.body.documentation_repo,
            download_url: req.body.download_url,
            tags: req.body.tags
          }, (error, project) => {
            if (error) throw error;

            category.projects.push(project);
            category.save();
            res.json(project);
          });
        });
    });
  }

  update(req, res) {
    req.checkBody('name', 'Give this project a name').notEmpty();
    req.checkBody('category_id', 'Select a category').notEmpty();
    req.checkBody('summary', 'Give this project a summary').notEmpty();

    req.getValidationResult().then((result) => {
      if (!result.isEmpty()) {
        res.status(400).json(result.mapped());
        return;
      }

      Project.findById(req.params.id)
        .exec((error, project) => {
          if (error) throw error;

          project.name = req.body.name;
          project.category = req.body.category_id;
          project.summary = req.body.summary;
          project.url = req.body.url;
          project.documentation_repo = req.body.documentation_repo;
          project.download_url = req.body.download_url;
          project.tags = req.body.tags;
          project.save();

          res.json(project);
        });
    });
  }

  delete(req, res) {
    Project.findByIdAndRemove(req.params.id)
      .exec((error, project) => {
        if (error) throw error;

        ProjectCategory.findById(project.category)
          .exec((error, category) => {
            category.projects.pull(project);
            category.save();
            res.json(project);
          });
      });
  }

  paginate(req, res, constraint = {}) {
    let page = req.query.page || 1;
    Project.count(constraint)
      .exec((error, count) => {
        if (error) throw error;
        Project.paginate(
          constraint,
          { page, limit: 10, sort: '-created_at', populate: 'category' }
        ).then(result => {
          res.json({ total: count, projects: result.docs });
        });
      });
  }
}

export default new ProjectsController;
