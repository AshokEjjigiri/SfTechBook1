import { createElement } from 'lwc';
import TrackDecoratorEg1_13_11_23 from 'c/trackDecoratorEg1_13_11_23';

describe('c-track-decorator-eg1-13-11-23', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-track-decorator-eg1-13-11-23', {
            is: TrackDecoratorEg1_13_11_23
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});