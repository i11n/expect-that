import { AssertionError } from "../AssertionError.ts";

export function isFalse (msg?: string) {
  return (value: unknown, not: boolean = false) => {
    let message: string;

    if (not) {
      if (value === false) {
        message = `Expected value to NOT be "false".`;
        message += !msg ? "" : ` ${msg}`;
        
        throw new AssertionError(message);
      }
    } else if (!(value === false)) {
      message = `Expected value to be "false", but got "${value}".`;
      message += !msg ? "" : ` ${msg}`;

      throw new AssertionError(message);
    }
  }
}
