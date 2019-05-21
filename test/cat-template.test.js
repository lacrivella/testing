import template from '../src/cat-template.js';
const test = QUnit.test;

QUnit.module('cat template');

test('cat template', assert => {
    //Arrange
    const cat = {
        name: 'Felix',
        type: 'Tuxedo'
    };

    const expected = /*html*/`
        <li>
            <h2 id="name">Felix</h2> 
            <p class="type">Tuxedo</p>
        </li>   
    `;

    //Act
    const html = template(cat);

    //Assert
    assert.htmlEqual(html, expected);
});