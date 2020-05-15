import { AssertionError } from "../AssertionError.ts";

export function isFalsey(msg?: string) {
  return (value: unknown, not: boolean = false) => {
    let message: string;

    if (not) {
      if (!value) {
        message = `Expected value to NOT be "false".`;
        message += !msg ? "" : ` ${msg}`;

        throw new AssertionError(message);
      }
    } else if (!!value) {
      message = `Expected value to be "false", but got "${value}".`;
      message += !msg ? "" : ` ${msg}`;

      throw new AssertionError(message);
    }
  };
}
