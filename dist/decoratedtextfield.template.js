import { html } from 'lit-element';
export default function template() {
    const classes = {
        'spectrum-FieldLabel--left': this.left
    };
    return html `
    <slot></slot>
    <sp-icon name="AlertMedium" class=""></sp-icon>
        `;
}
//# sourceMappingURL=decoratedtextfield.template.js.map