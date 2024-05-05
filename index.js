#! /usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";

const program = new Command();

program
  .command("test-command")
  .description("This is test command")
  .action(() => {
    console.log(chalk.blue.bold("Test command executed succesfully"));
  });

program.parse();
