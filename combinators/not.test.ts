import { expectThat } from "../expectThat.ts";
import { isTypeOf } from "../assertions/isTypeOf.ts";
import { not } from "./not.ts";

Deno.test("not", () => {
  expectThat(25)(
    not(isTypeOf("string"))
  )
});