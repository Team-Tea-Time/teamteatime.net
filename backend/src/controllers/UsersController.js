class UsersController {
  get (req, res) {
    res.json(req.params);
  }
}

export default new UsersController;
