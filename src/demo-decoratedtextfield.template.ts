import { html } from 'lit-element';
import { DemoDecoratedtextfield } from './demo-decoratedtextfield.component';

import '@spectrum/sp-decoratedtextfield';
import '@spectrum/sp-container';


export default function template(this: DemoDecoratedtextfield) {
  return html`
  <sp-container>
  <sp-rule medium label="Standard"></sp-rule>
      <sp-demo width="300">
      <pre><sp-decoratedtextfield>
  <sp-fieldlabel label="Life Story">
      <sp-textfield placeholder="Enter your life story"></sp-textfield>
  </sp-fieldlabel>
</sp-decoratedtextfield></pre>
      </sp-demo>
      <sp-rule medium label="Multiline"></sp-rule>
      <sp-demo width="300">
      <pre><sp-decoratedtextfield>
  <sp-fieldlabel left label="Life Story">
      <sp-textarea placeholder="Enter your life story"></sp-textarea>
  </sp-fieldlabel>
</sp-decoratedtextfield></pre>
      </sp-demo>
  </sp-container>
  `;
}
