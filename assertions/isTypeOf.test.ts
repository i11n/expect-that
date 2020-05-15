import { expectThat } from "../expectThat.ts";
import { isTypeOf } from "./isTypeOf.ts";

Deno.test("isTypeOf", () => {
  expectThat("Hello world")(
    isTypeOf("string")
  );
})

//  Test assertions when passed bad data