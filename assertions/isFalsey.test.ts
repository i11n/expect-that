import { expectThat } from "../expectThat.ts";
import { isFalsey } from "./isFalsey.ts";

Deno.test("isFalsey", () => {
  expectThat(0)(
    isFalsey()
  );
})

//  Test assertions when passed bad data