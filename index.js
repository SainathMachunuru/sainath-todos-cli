#! /usr/bin/env node

import { showTODOStatus } from "./commands/show-status.js";
import { Command, Option } from "commander";

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
