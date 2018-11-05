**Good to know**

If you ommit <code>id</code>- and <code>for</code>-attributes of a <code>vf-input</code> and/or a <code>vf-label</code> then automatically generated ids will be used. As soon a  <code>vf-input</code> or <code>vf-label</code> is a descendant of an <code>vf-input-item</code> this *magic* happens. <code>vf-input-item</code> generates the unique id and injects it in it's descendants.