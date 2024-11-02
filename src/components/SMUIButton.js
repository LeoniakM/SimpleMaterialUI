class SMUIButton extends HTMLElement {
    static get observedAttributes() {
        return ['label'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.button = document.createElement('button');
        this.button.textContent = this.getAttribute('label') || 'Button';

        const style = document.createElement('style');
        style.textContent = `
            button {
                background-color: #6200ee;
                color: white;
                padding: 10px 16px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
            }
            button:hover {
                background-color: #3700b3;
            }
        `;

        this.shadowRoot.append(style, this.button);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'label') {
            this.button.textContent = newValue || 'Button';
        }
    }
}

customElements.define('smui-button', SMUIButton);
export default SMUIButton;