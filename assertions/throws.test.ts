import { expectThat } from "../expectThat.ts";
import { throws } from "./throws.ts";
Deno.test("throws", () => {
  expectThat(() => {
    throw new Error();
  })(
    throws(),
  );
});

//  Test assertions when passed bad data
