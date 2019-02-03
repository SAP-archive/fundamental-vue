import { FrameworkDocumentation, ComponentDocumentation } from '@/api';
import { all } from '@/components';

const frameworkDocumentation = new FrameworkDocumentation();
for (const component of Object.values(all)) {
    if ((typeof component !== 'object' && typeof component !== 'function') || !Reflect.has(component, 'options')) {
        continue;
    }
    const options = Reflect.get(component, 'options');
    if (typeof options === 'object') {
        if ('$componentDocumentation' in options) {
            const api = Reflect.get(options, '$componentDocumentation');
            if (api instanceof ComponentDocumentation) {
              frameworkDocumentation.add(api);
            }
        }
    }
}

export { frameworkDocumentation };
