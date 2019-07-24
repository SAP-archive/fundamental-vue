import FdSection from "./section.vue";
import FdSectionTitle from "./section-title.vue";
import FdSectionHeader from "./section-header.vue";
import { pluginify } from "./../../util";
export default pluginify(FdSection, FdSectionTitle, FdSectionHeader);
export { default as Section } from "./section.vue";
export { default as SectionTitle } from "./section-title.vue";
export { default as SectionHeader } from "./section-header.vue";
