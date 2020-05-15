import { expectThat } from "../expectThat.ts";
import { isFalse } from "./isFalse.ts";

Deno.test("isFalse", () => {
  expectThat(false)(
    isFalse(),
  );
});

//  Test assertions when passed bad data
