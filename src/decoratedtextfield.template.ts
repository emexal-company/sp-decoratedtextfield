import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { Decoratedtextfield } from './decoratedtextfield.component';

export default function template(this: Decoratedtextfield) {

    const classes = {
        'spectrum-FieldLabel--left': this.left
      };
    
    return html`
    <slot></slot>
    <sp-icon name="AlertMedium" class=""></sp-icon>
        `;
}
 