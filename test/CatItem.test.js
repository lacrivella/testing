import CatItem from '../src/components/CatItem.js';

const test = QUnit.test;
QUnit.module('CatItem');

test('template', assert => {
    //Arrange
    const cat = {
        name: 'Felix',
        type: 'the Tuxedo'
    };
 
    const expected = /*html*/ `
        <li>
            <h2 class="name">Felix</h2>
            <p class="type">the Tuxedo</p>
            <button>X</button>
        </li>
     `;

    //Act 
    const catItem = new CatItem({ cat });
    const html = catItem.renderTemplate();

    //Assert
    assert.htmlEqual(html, expected);
 
});

