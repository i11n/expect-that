import { AssertionError } from "../AssertionError.ts";

export function isTrue (msg?: string) {
  return (value: unknown, not: boolean = false) => {
    let message: string;

    if (not) {
      if (value === true) {
        message = `Expected value to NOT be "true".`;
        message += !msg ? "" : ` ${msg}`;
        
        throw new AssertionError(message);
      }
    } else if (!(value === true)) {
      message = `Expected value to be "true", but got "${value}".`;
      message += !msg ? "" : ` ${msg}`;

      throw new AssertionError(message);
    }
  }
}
