import { AssertionError } from "../AssertionError.ts";

export function isNull(msg?: string) {
  return (value: unknown, not: boolean = false) => {
    let message: string;

    if (not) {
      if (value == null) {
        message = `Expected value to NOT be "null".`;
        message += !msg ? "" : ` ${msg}`;

        throw new AssertionError(message);
      }
    } else if (!(value == null)) {
      message = `Expected value to be "null", but got "${value}".`;
      message += !msg ? "" : ` ${msg}`;

      throw new AssertionError(message);
    }
  };
}
