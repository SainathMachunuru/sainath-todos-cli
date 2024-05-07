#! /usr/bin/env node

const { showTODOStatus } =  require("./commands/show-status")
const { Command, Option } =  require("commander");

const program = new Command();

program
  .command("show-status")
  .description("show the status of todos")
  .addOption(new Option('-t, --type <type>', 'todo type').choices(['all', 'even', 'odd']))
  .addOption(new Option('-l, --limit <limit>', 'limit for first number of todos',{ presetArg: parseInt}))
  .action((args) => {
        showTODOStatus(args.type, parseInt(args.limit));

  });

program.parse();
