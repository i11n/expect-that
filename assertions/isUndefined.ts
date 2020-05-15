import { AssertionError } from "../AssertionError.ts";

export function isUndefined (msg?: string) {
  return (value: unknown, not: boolean = false) => {
    let message: string;

    if (not) {
      if (value === undefined) {
        message = `Expected value to NOT be "undefined".`;
        message += !msg ? "" : ` ${msg}`;
        
        throw new AssertionError(message);
      }
    } else if(!(value === undefined)) {
      message = `Expected value to be "undefined", but got "${value}".`;
      message += !msg ? "" : ` ${msg}`;

      throw new AssertionError(message);
    }
  }
}
