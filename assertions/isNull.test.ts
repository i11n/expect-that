import { expectThat } from "../expectThat.ts";
import { isNull } from "./isNull.ts";

Deno.test("isNull", () => {
  expectThat(null)(
    isNull()
  );
})

//  Test assertions when passed bad data