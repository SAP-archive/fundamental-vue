<script>
import { routeConfigForComponentNamed } from "./../router/component-api-route";
import ComponentName from "./../util/component-name";

export default {
  functional: true,
  render(h, ctx) {
    const rawName = ctx.props.componentName;
    if (rawName == null) {
      return h(null);
    }
    const componentName = typeof rawName === "string" ? ComponentName.from(rawName) : rawName;
    const to = routeConfigForComponentNamed(componentName);
    return ctx.scopedSlots.default({ to, componentName });
  },
  props: {
    componentName: {
      // If:
      // - String: raw but normalized component name
      // - Instance of ComponentName
      // We need those two forms because our component-name markdown-it-plugin is passing the component name
      // as a plain string.
      type: [String, ComponentName]
    }
  }
};
</script>
