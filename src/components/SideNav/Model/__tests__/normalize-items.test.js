import normalizeItems from "./../normalize-items";
import { normalizeItem } from "./../normalize-items";

// foo is a mock function
describe("item normalizer", () => {
  describe("normalizeItem", () => {
    it("works with {}", () => {
      const normalized = normalizeItem({});
      expect(normalized).toHaveProperty("$_fdId");
      expect(normalized).toHaveProperty("$_fdChildren", []);
    });
    it("works with null", () => {
      const normalized = normalizeItem(null);
      expect(normalized).toHaveProperty("$_fdId");
      expect(normalized).toHaveProperty("$_fdChildren", []);
    });
    it("works with undefined", () => {
      const normalized = normalizeItem(undefined);
      expect(normalized).toHaveProperty("$_fdId");
      expect(normalized).toHaveProperty("$_fdChildren", []);
    });

    it("works with simple object", () => {
      const normalized = normalizeItem({ firstName: "chris" });
      expect(normalized).toHaveProperty("$_fdId");
      expect(normalized).toHaveProperty("$_fdChildren", []);
      expect(normalized).toHaveProperty("firstName", "chris");
    });

    it("re-uses id", () => {
      const normalized = normalizeItem({ id: "123" });
      expect(normalized).toHaveProperty("$_fdId", "123");
      expect(normalized).toHaveProperty("id", "123");
      expect(normalized).toHaveProperty("$_fdChildren", []);
    });

    it("re-uses children", () => {
      const normalized = normalizeItem({
        children: [{ firstName: "chris" }]
      });
      expect(normalized).toHaveProperty("$_fdId");
      const children = normalized["$_fdChildren"];
      expect(children).toMatchObject([{ firstName: "chris" }]);
    });
  });
  describe("normalizeItems", () => {
    it("works with empty array", () => {
      const normalized = normalizeItems([]);
      expect(normalized).toEqual([]);
    });

    it("works with array with single object", () => {
      const [normalized] = normalizeItems([{}]);
      expect(normalized).toHaveProperty("id");
    });

    it("works with array with children", () => {
      const [normalized] = normalizeItems([
        {
          fn: "chris",
          children: [
            {
              fn: "andi"
            }
          ]
        }
      ]);
      expect(normalized).toHaveProperty("fn");
      expect(normalized).toHaveProperty("id");
      expect(normalized).toHaveProperty("children");
      const { children } = normalized;
      const [child] = children;
      expect(child).toHaveProperty("fn");
      expect(child).toHaveProperty("id");
    });
  });
});
