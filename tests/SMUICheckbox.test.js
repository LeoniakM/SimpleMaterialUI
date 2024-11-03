import {SMUICheckbox} from '../src/components/SMUICheckbox';

describe('SMUICheckbox', () => {
    let checkbox;

    beforeEach(() => {
        checkbox = document.createElement('smui-checkbox');
        document.body.appendChild(checkbox);
    });

    afterEach(() => {
        document.body.removeChild(checkbox);
    });

    test('should render with default label', () => {
        expect(checkbox.shadowRoot.querySelector('label').textContent.trim()).toBe('Checkbox');
    });

    test('should render with provided label', () => {
        checkbox.setAttribute('label', 'Test Label');
        expect(checkbox.shadowRoot.querySelector('label').textContent.trim()).toBe('Test Label');
    });

    test('should be checked when the checked attribute is set', () => {
        checkbox.setAttribute('checked', '');
        expect(checkbox.shadowRoot.querySelector('input').checked).toBe(true);
    });

    test('should not be checked when the checked attribute is removed', () => {
        checkbox.setAttribute('checked', '');
        checkbox.removeAttribute('checked');
        expect(checkbox.shadowRoot.querySelector('input').checked).toBe(false);
    });

    test('should update label when attribute changes', () => {
        checkbox.setAttribute('label', 'Initial Label');
        checkbox.setAttribute('label', 'Updated Label');
        expect(checkbox.shadowRoot.querySelector('label').textContent.trim()).toBe('Updated Label');
    });
});