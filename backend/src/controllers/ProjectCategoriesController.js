import ProjectCategory from '../models/ProjectCategory';

class ProjectCategoriesController {
  constructor() {
    this.list = this.list.bind(this);
  }

  list(req, res) {
    ProjectCategory.find({}).populate('projects').exec((error, categories) => {
      if (error) throw error;
      res.json(categories);
    });
  }

  get(req, res) {
    ProjectCategory.findById(req.params.id)
      .exec((error, document) => {
        if (error) throw error;
        res.json(document);
      });
  }

  create(req, res) {
    req.checkBody('name', 'Give this project category a name').notEmpty();

    req.getValidationResult().then((result) => {
      if (!result.isEmpty()) {
        res.status(400).json(result.mapped());
        return;
      }

      let document = new ProjectCategory({ name: req.body.name });
      document.save();

      res.json(document);
    });
  }

  update(req, res) {
    req.checkBody('name', 'Give this project a name').notEmpty();

    req.getValidationResult().then((result) => {
      if (!result.isEmpty()) {
        res.status(400).json(result.mapped());
        return;
      }

      ProjectCategory.findById(req.params.id)
        .exec((error, document) => {
          if (error) throw error;

          document.name = req.body.name;
          document.save();

          res.json(document);
        });
    });
  }

  delete(req, res) {
    ProjectCategory.findByIdAndRemove(req.params.id)
      .exec((error, document) => {
        if (error) throw error;
        res.json(document);
      });
  }
}

export default new ProjectCategoriesController;
