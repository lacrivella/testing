const test = QUnit.test;

QUnit.module('html');

const pattern = /[\f\n\r\t\v ]{2,}/g;
const replacement = ' ';

function normalize(html) {
    const replaced = html.replace(pattern, replacement);
    const trimmed = replaced.trim();

    return trimmed;
}

test('normalize whitespace', (assert) => {
    //arrange
    const html = /*html*/`
        <div>hello</div>
    `;

    const expected = /*html*/`
            <div>hello</div>
    `;
    
    //act
    const normalizeHTML = normalize(html);
    const normalizeExpected = normalize(expected);

    //assert
    assert.equal(normalizeHTML, normalizeExpected);
});