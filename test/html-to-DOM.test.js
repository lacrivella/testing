const test = QUnit.test;

QUnit.module('html to DOM');

function htmlToDOM(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    const content = template.content;
    const firstElementChild = content.firstElementChild;

    return firstElementChild;
}

test('convert html to DOM', (assert) => {
    //arrange
    const html = /*html*/`
    <span>test</span>
    `;

    // act
    const dom = htmlToDOM(html);
    // assert
    assert.equal(dom.tagName, 'SPAN');
    assert.equal(dom.textContent, 'test');
});