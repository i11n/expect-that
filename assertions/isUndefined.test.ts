import { expectThat } from "../expectThat.ts";
import { isUndefined } from "./isUndefined.ts";

Deno.test("isUndefined", () => {
  expectThat(undefined)(
    isUndefined(),
  );
});

//  Test assertions when passed bad data
