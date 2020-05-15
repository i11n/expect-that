import { ExpectCallback } from "../types.ts";

export function not(callback: ExpectCallback) {
  return (value: unknown) => {
    callback(value, true);
  }
}