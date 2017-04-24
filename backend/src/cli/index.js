import minimist from 'minimist';

import createUser from './commands/create/User';

let commandMap = {
  'create:user': createUser
}

let handleCommand = function (argv) {
  if (commandMap[argv[0]]) {
    return commandMap[argv[0]].run(minimist(argv.slice(1)));
  } else {
    console.log(`Command '${argv[0]}' not recognised.`);
    process.exit(1);
  }
}

export default handleCommand;
