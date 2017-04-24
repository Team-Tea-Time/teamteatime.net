import Promise from 'bluebird';

class Command {
  displayHelp() {
    console.log(this.description, '\n', 'Arguments:', this.args);
  }

  run(argv) {
    if (argv._[0] === 'help') {
      this.displayHelp();
      return Promise.resolve();
    }

    if (this.isValid(argv)) {
      return this.exec(argv);
    }

    return Promise.reject();
  }

  isValid(argv) {
    let valid = true;

    for (let key in this.args) {
      if (this.args[key].required && !argv[key]) {
        valid = false;
        console.error(`Argument '${key}' is required.`);
      }
    }

    return valid;
  }

  create(model, data) {
    return new Promise((resolve, reject) => {
      model.create(data).then(() => {
        return resolve();
      }).catch(error => {
        console.error(error);
        return reject();
      });
    });
  }
}

export default Command;
