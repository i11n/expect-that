import { expectThat } from "../expectThat.ts";
import { isTruthy } from "./isTruthy.ts";

Deno.test("isTruthy", () => {
  expectThat(1)(
    isTruthy()
  );
})

//  Test assertions when passed bad data