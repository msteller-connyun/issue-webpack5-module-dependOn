import { LitElement, html} from 'lit';
import {  customElement } from 'lit/decorators.js';

@customElement('my-component')
export default class MyComponent extends LitElement {

    render() {
        return html`<p>Hello World</p>`;
    }
}