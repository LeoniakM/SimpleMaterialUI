class SMUICheckbox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        this.checkbox = document.createElement('input');
        this.checkbox.type = 'checkbox';
        this.checkbox.checked = this.hasAttribute('checked');

        this.label = document.createElement('label');
        this.label.textContent = this.getAttribute('label') || 'Checkbox';
        this.label.prepend(this.checkbox);

        const style = document.createElement('style');
        style.textContent = `
      label {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      input[type="checkbox"] {
        margin-right: 8px;
      }
    `;

        this.shadowRoot.append(style, this.label);
    }

    static get observedAttributes() {
        return ['label', 'checked'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'label') {
            this.label.textContent = newValue || 'Checkbox';
            this.label.prepend(this.checkbox);
        } else if (name === 'checked') {
            this.checkbox.checked = this.hasAttribute('checked');
        }
    }
}

customElements.define('smui-checkbox', SMUICheckbox);

export {SMUICheckbox};