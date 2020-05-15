import { AssertionError } from "../AssertionError.ts";

export function hasValue(msg?: string) {
  return (value: unknown, not: boolean = false) => {
    let message: string;

    if (not) {
      if (!(value === undefined || value == null)) {
        message = `Expected value to NOT be "undefined" or "null".`;
        message += !msg ? "" : ` ${msg}`;

        throw new AssertionError(message);
      }
    } else if (value === undefined || value == null) {
      message =
        `Expected value to be "undefined" or "null", but got "${value}".`;
      message += !msg ? "" : ` ${msg}`;

      throw new AssertionError(message);
    }
  };
}
