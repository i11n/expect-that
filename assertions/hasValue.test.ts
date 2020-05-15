import { expectThat } from "../expectThat.ts";
import { hasValue } from "./hasValue.ts";

Deno.test("hasValue", () => {
  expectThat(false)(
    hasValue(),
  );
});

//  Test assertions when passed bad data
