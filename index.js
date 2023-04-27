import chalk from 'chalk';
import randomColor from 'randomcolor';

const hue = process.argv[2];
const luminosity = process.argv[3];

const color = randomColor({
  luminosity: luminosity,
  hue: hue,
});

const log = console.log;
chalk.level = 1;

console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('#####                     #####'));
console.log(chalk.hex(color).bold(`#####       ${color}       #####`));
console.log(chalk.hex(color).bold('#####                     #####'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));


//9:11:43 PM:   └─┬ eslint-plugin-flowtype 8.0.3
//9:11:43 PM:     ├── ✕ missing peer @babel/plugin-syntax-flow@^7.14.5
//9:11:43 PM:     └── ✕ missing peer @babel/plugin-transform-react-jsx@^7.14.9
//9:11:43 PM: Peer dependencies that should be installed:
//9:11:43 PM:   @babel/core@>=7.11.0
////9:11:43 PM:   @babel/plugin-syntax-flow@^7.14.5
//9:11:43 PM:   @babel/plugin-transform-react-jsx@^7.14.9
//9:11:43 PM: hint: If you want peer dependencies to be automatically installed, add "auto-install-peers=true" to an .npmrc file at the root of your project.
//9:11:43 PM: hint: If you don't want pnpm to fail on peer dependency issues, add "strict-peer-dependencies=false" to an .npmrc file at the root of your project.
//9:11:44 PM: Error during pnpm install
//9:11:44 PM: Build was terminated: dependency_installation script returned non-zero exit code: 1
//9:11:44 PM: Failing build: Failed to install dependencies
//9:11:44 PM: Finished processing build request in 22.892s
