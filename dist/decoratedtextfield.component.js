import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import decoratedtextfieldStyles from './decoratedtextfield.styles';
import template from './decoratedtextfield.template';
let Decoratedtextfield = class Decoratedtextfield extends Base {
    constructor() {
        super(...arguments);
        this.left = false;
    }
    render() {
        return template.call(this);
    }
};
Decoratedtextfield.componentStyles = [decoratedtextfieldStyles];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Decoratedtextfield.prototype, "left", void 0);
Decoratedtextfield = __decorate([
    customElement('sp-decoratedtextfield')
], Decoratedtextfield);
export { Decoratedtextfield };
//# sourceMappingURL=decoratedtextfield.component.js.map