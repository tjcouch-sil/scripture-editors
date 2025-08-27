declare module "proskomma-core" {
  export class Proskomma {
    selectors: { name: string; type: string }[];
    constructor();
    validateSelectors(): void;
    importDocument(selectors: Record<string, string>, format: string, content: string): void;
    gqlQuerySync(query: string): {
      data: { documents: { id: string; docSetId: string; perf: string }[] };
    };
  }
}
