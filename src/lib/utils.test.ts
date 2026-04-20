import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("Utils Library", () => {
  it("should merge tailwind classes properly using cn()", () => {
    const result = cn("bg-red-500", "text-white", { "opacity-50": true, "hidden": false });
    expect(result).toContain("bg-red-500");
    expect(result).toContain("text-white");
    expect(result).toContain("opacity-50");
    expect(result).not.toContain("hidden");
  });
});
