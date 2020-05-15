import { ExpectCallback } from "../types.ts";

export function not(callback: ExpectCallback) {
  return (value: unknown, not: boolean = false) => {
    callback(value, !not);
  };
}
