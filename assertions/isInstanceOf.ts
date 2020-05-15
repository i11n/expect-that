import { AssertionError } from "../AssertionError.ts";
import { Constructor } from "../types.ts";

export function isInstanceOf(constructor: Constructor, msg?: string) {
  return (value: unknown, not: boolean = false) => {
    let message: string;

    if (not) {
      if (typeof value === "object" && value instanceof constructor) {
        message =
          `Expected value to NOT be an instance of "${constructor.name}".`;
        message += !msg ? "" : ` ${msg}`;

        throw new AssertionError(message);
      }
    } else if (!(typeof value === "object" && value instanceof constructor)) {
      message = `Expected value to be an instance of "${constructor.name}".`;
      message += !msg ? "" : ` ${msg}`;

      throw new AssertionError(message);
    }
  };
}
