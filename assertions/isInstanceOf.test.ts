import { expectThat } from "../expectThat.ts";
import { isInstanceOf } from "./isInstanceOf.ts";

Deno.test("isInstanceOf", () => {
  expectThat({})(
    isInstanceOf(Object)
  );
})

//  Test assertions when passed bad data