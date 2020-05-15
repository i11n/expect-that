import { expectThat } from "../expectThat.ts";
import { isTypeOf } from "../assertions/isTypeOf.ts";
import { isTrue } from "../assertions/isTrue.ts";
import { all } from "./all.ts";

Deno.test("all", () => {
  expectThat(true)(
    all(
      isTrue(),
      isTypeOf("boolean")
    )
  )
});