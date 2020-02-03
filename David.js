import { LitElement, html } from 'lit-element';

class SimpleGreeting extends LitElement {

    static get properties() {
        return {name: {type: String},name1: {type: String},name2: {type: String}};
    }

    constructor() {
        super();
        this.name = 'David';
        this.name1 = 'Programmist';
        this.name2 = 'ot Allaha';
    }
    render() {
        return html`<p> ${this.name} ${this.name1} ${this.name2}!</p>`;
    }
}
customElements.define('simple-greeting', SimpleGreeting);