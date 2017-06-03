import User from '../../../models/User';
import Command from '../Command';

class Create extends Command {
  constructor() {
    super();

    this.description = 'Create a user.';
    this.args = {
      name: { required: true },
      email: { required: true },
      password: { required: true }
    }
  }

  exec(argv) {
    return this.create(User, {
      name: argv.name,
      email: argv.email,
      password: argv.password
    });
  }
}

export default new Create;
