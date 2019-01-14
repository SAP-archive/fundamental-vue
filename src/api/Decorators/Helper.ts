import { ComponentDocumentation } from './../Model';
import { ComponentOptions } from 'vue/types/options';
import { apiDocsEnabled } from '@/config';

type ComponentDocumentationCB = (documentation: ComponentDocumentation) => (void);
export const withComponentDocumentation = (options: ComponentOptions<any>, cb: ComponentDocumentationCB) => {
  if(!apiDocsEnabled) {
    return;
  }

  const componentName = options.componentName || options.name;
  if(componentName == null) {
    return;
  }
  const documentation = options.$componentDocumentation || new ComponentDocumentation(componentName);
  options.$componentDocumentation = documentation;
  cb(documentation);
};
