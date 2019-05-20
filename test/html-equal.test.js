const test = QUnit.test;

QUnit.module('html');

test('normalize whitespace', (assert) => {
    //arrange
    const html = /*html*/`
        <div>hello</div>
    `;

    const expected = /*html*/`
            <div>hello</div>
    `;
    
    //act
    // const normalizeHTML = normalize(html);
    // const normalizeExpected = normalize(expected);

    //assert
    assert.htmlEqual(html, expected);
});