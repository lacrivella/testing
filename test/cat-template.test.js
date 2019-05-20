const test = QUnit.test;
function template() {
    const html = `
        <li>
            <h2 id="name">Felix</h2>
            <p class="type">the Tuxedo</p>
        </li>
`;
    return html;
}

test('', function(assert) {
    //Arrange
    const cat = {
        name: 'Felix',
        type: 'Tuxedo'
    };
 
    const expected = /*html*/ `
        <li>
            <h2 id="name">Felix</h2>
            <p class="type">the Tuxedo</p>
        </li>
        `;
    //Act 
    const html = template(cat);

    //Assert
    assert.equal(html, expected);
 
});
