import { createElement } from 'lwc';
import CreateAccountWithApex21_11_23 from 'c/createAccountWithApex21_11_23';

describe('c-create-account-with-apex21-11-23', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-create-account-with-apex21-11-23', {
            is: CreateAccountWithApex21_11_23
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});