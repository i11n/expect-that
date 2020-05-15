import { AssertionError } from "../AssertionError.ts";

export function isTypeOf(typeString: string, msg?: string) {
  return (value: unknown, not: boolean = false) => {
    let message: string;
    let type = typeof value;
    
    if (not) {
      if (type === typeString) {
        message = `Expected value to NOT be type of "${typeString}".`;
        message += !msg ? "" : ` ${msg}`;

        throw new AssertionError(message);
      }
    } else if (!(type === typeString)) {
      message =
        `Expected value to be type of "${typeString}", but got "${type}".`;
      message += !msg ? "" : ` ${msg}`;

      throw new AssertionError(message);
    }
  };
}
