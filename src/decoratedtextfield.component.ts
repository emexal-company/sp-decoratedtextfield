import { customElement,  property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import decoratedtextfieldStyles from './decoratedtextfield.styles';
import template from './decoratedtextfield.template';

@customElement('sp-decoratedtextfield')
export class Decoratedtextfield extends Base {
  public static componentStyles = [decoratedtextfieldStyles];

  @property({ type: Boolean }) public left: boolean = false;

  protected render() {
    return template.call(this);
  } 
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-decoratedtextfield': Decoratedtextfield;
  }
}
