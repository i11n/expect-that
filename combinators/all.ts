import { ExpectCallback } from "../types.ts";
import { AssertionError } from "../AssertionError.ts";

export function all(...callbacks: ExpectCallback[]) {
  return (value: unknown, not: boolean = false) => {
    const len = callbacks.length;

    if (not) {
      let met = 0;

      for (let i = 0; i < len; i++) {
        let callback = callbacks[i];

        try {
          callback(value);
          met++;
        } catch (e) {
          break;
        }
      }

      if (met === len) {
        let message = `Expected value NOT to meet all of the assertions.`;
        throw new AssertionError(message);
      }
    } else {
      for (let i = 0; i < len; i++) {
        let callback = callbacks[i];

        try {
          callback(value);
        } catch (e) {
          let message = `Expected value to meet all of the assertions.`;
          throw new AssertionError(message);
        }
      }
    }
  };
}
