import chalk from 'chalk';

const log = (value: unknown, funcName?: string): void => {
  console.log(
    `\n  ${chalk.magenta(funcName || '#')} //=> ${chalk.bgBlue(` ${value} `)}`,
  );
};

export default log;
