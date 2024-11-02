import SMUIButton from '../src/components/SMUIButton.js';

describe('SMUIButton', () => {
    it('should render a button with the label "Button"', () => {
        const button = new SMUIButton();
        const shadowRoot = button.shadowRoot;
        const buttonElement = shadowRoot.querySelector('button');
        expect(buttonElement.textContent).toBe('Button');
    });

    it('should render a button with the label "Click me"', () => {
        const button = new SMUIButton();
        button.setAttribute('label', 'Click me');
        const shadowRoot = button.shadowRoot;
        const buttonElement = shadowRoot.querySelector('button');
        expect(buttonElement.textContent).toBe('Click me');
    });
});