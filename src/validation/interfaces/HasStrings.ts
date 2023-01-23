import Config from "./Config";

interface HasStrings extends Config {
  getStrings(): Array<string>;
}

export const hasStrings = (arg: any): arg is HasStrings =>
  typeof(arg?.getStrings) === 'function';

export default HasStrings;