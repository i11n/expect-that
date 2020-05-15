import { ExpectCallback } from "./types.ts";

export function expectThat(value: unknown) {
  return (...callbacks: ExpectCallback[]): void => {
    callbacks.forEach((callback) => {
      callback(value);
    });
  };
}
