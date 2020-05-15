import { expectThat } from "../expectThat.ts";
import { isTrue } from "./isTrue.ts";

Deno.test("isTrue", () => {
  expectThat(true)(
    isTrue()
  );
})

//  Test assertions when passed bad data