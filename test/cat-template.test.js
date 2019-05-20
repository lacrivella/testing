const test = QUnit.test;
function template(cat) {
    return /*html*/`
        <li>
            <h2 id="name">${cat.name}</h2>
            <p class="type">${cat.type}</p>
        </li>
    `;
}

test('cat template', function(assert) {
    //Arrange
    const cat = {
        name: 'Felix',
        type: 'the Tuxedo'
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
    assert.htmlEqual(html, expected);
 
});
