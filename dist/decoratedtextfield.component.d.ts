import { Base } from '@spectrum/sp-base';
export declare class Decoratedtextfield extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    left: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-decoratedtextfield': Decoratedtextfield;
    }
}
