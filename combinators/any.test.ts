import { expectThat } from "../expectThat.ts";
import { isTypeOf } from "../assertions/isTypeOf.ts";
import { isTrue } from "../assertions/isTrue.ts";
import { any } from "./any.ts";

Deno.test("any", () => {
  expectThat("Hello World")(
    any(
      isTrue(),
      isTypeOf("string"),
    )
  )
});