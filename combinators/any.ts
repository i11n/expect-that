import { ExpectCallback } from "../types.ts";
import { AssertionError } from "../AssertionError.ts";

export function any(...callbacks: ExpectCallback[]) {
  return (value: unknown, not: boolean = false) => {
    let message;

    //  not any of of the validators
    if (not) {
      for (let i = 0; i < callbacks.length; i++) {
        let callback = callbacks[i];
        let okay = true;

        try {
          callback(value);
          okay = false;

          message = "Expected value NOT to meet any of the asseretions.";
          throw new AssertionError(message);
        } catch (e) {
          if (!okay) {
            throw e;
          }
          continue;
        }
      }
    } else {
      let okay = false;

      for (let i = 0; i < callbacks.length; i++) {
        let callback = callbacks[i];
        
        try {
          callback(value);
          okay = true;
          break;
        } catch (e) {
          continue;
        }
      }

      if (!okay) {
        message = "Expected value to meet at least one of the assertions.";
        throw new AssertionError(message);
      }
    }
  };
}
