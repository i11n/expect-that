import { AssertionError } from "../AssertionError.ts";

export function isTruthy (msg?: string) {
  return (value: unknown, not: boolean = false) => {
    let message: string;

    if (not) {
      if (!!value) {
        message = `Expected value to NOT be truthy.`;
        message += !msg ? "" : ` ${msg}`;
        
        throw new AssertionError(message);
      }
    } else if (!value) {
      message = `Expected value to be truthy, but got "${value}".`;
      message += !msg ? "" : ` ${msg}`;

      throw new AssertionError(message);
    }
  }
}
