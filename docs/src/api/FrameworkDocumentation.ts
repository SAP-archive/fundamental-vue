import { ComponentDocumentation } from "./ComponentDocumentation";

export type FrameworkDocumentation = {
  components: { [componentName: string]: ComponentDocumentation };
};
