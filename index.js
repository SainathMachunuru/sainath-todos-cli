#! /usr/bin/env node

import { showTODOStatus } from "./commands/show-status.js";
import { Command } from "commander";

const program = new Command();

program
  .command("show-status")
  .description("show the status of todos")
  .action((args) => {
        showTODOStatus();

  });

program.parse();
