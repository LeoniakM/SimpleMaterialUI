class SMUIButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const button = document.createElement('button');
        button.textContent = this.getAttribute('label') || 'Button';

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

        shadow.appendChild(style);
        shadow.appendChild(button);
    }
}

customElements.define('smui-button', SMUIButton);
export default SMUIButton;