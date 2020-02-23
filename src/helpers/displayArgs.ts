import log from './log';

interface Arguments {
  value: unknown;
  funcName: string;
}

const displayArgs = ({ value, funcName }: Arguments): void =>
  log(value, funcName);

export default displayArgs;
