import { AssertionError } from "../AssertionError.ts";
import { Constructor } from "../types.ts";

export function throws(ErrorClass?: Constructor, msgSearch = "", msg?: string) {
  return (value: unknown, not: boolean = false) => {
    let message: string;
    let throws = false;
    let matchesClass;
    let matchesString;
    let error;
    if (typeof value !== "function") {
      throw new Error(
        `The "throws" assertion expects a "function", instead received "${typeof value}".`,
      );
    }
    try {
      value();
    } catch (e) {
      error = e;
      throws = true;
      matchesClass = ErrorClass
        ? (Object.getPrototypeOf(e) === ErrorClass.prototype)
        : undefined;
      matchesString = msgSearch ? (e.message.includes(msgSearch)) : undefined;
    }

    if (not) {
      if (throws) {
        if (typeof matchesClass === "boolean" && matchesClass) {
          message = `Expected function NOT to throw and error of "${
            (ErrorClass as Constructor).name
          }".`;
          message += !msg ? "" : ` ${msg}`;

          throw new AssertionError(message);
        }

        if (typeof matchesString === "boolean" && matchesString) {
          message =
            `Expected function NOT to throw an error message containing "${msgSearch}".`;
          message += !msg ? "" : ` ${msg}`;

          throw new AssertionError(message);
        }

        message = "Expected function NOT to throw an error.";
        message += !msg ? "" : ` ${msg}`;
        throw new AssertionError(message);
      }
    } else if (throws) {
      if (typeof matchesClass === "boolean" && !matchesClass) {
        message = `Expected function to throw an error of "${
          (ErrorClass as Constructor).name
        }", instead got "${error.constructor.name}".`;
        message += !msg ? "" : ` ${msg}`;

        throw new AssertionError(message);
      }

      if (typeof matchesString === "boolean" && !matchesString) {
        message =
          `Expected function to throw an error message containing "${msgSearch}", instead got "${error.message}".`;
        message += !msg ? "" : ` ${msg}`;

        throw new AssertionError(message);
      }
    } else {
      message = "Expected function to throw an error.";
      message += !msg ? "" : ` ${msg}`;
      throw new AssertionError(message);
    }
  };
}
