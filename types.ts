export type ExpectCallback = (value: unknown, not?: boolean) => void;

export type ExpectFunc = (...args: any[]) => ExpectCallback;

export interface Constructor {
  new (...args: any[]): any;
}
