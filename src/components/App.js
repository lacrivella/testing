import Component from './Component.js';
import Header from './Header.js';
import AddCat from './AddCat.js';
import CatList from './CatList.js';
import cats from '../../data/cats.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        // const props = { cats };

        const addCat = new AddCat({
            onAdd: (newCat) => {
                // update the array
                cats.unshift(newCat); 
                //unshift adds to beginning, push is at the end

                // update CatList
                catList.update({ cats });
            }
        });
        const addCatDOM = addCat.render();
        main.appendChild(addCatDOM);

        const catList = new CatList ({
            cats,
            onRemove: (catToRemove) => {
                //remove from array
                const index = cats.indexOf(catToRemove);
                cats.splice(index, 1);

                catList.update({ cats });
            }
        });
        const catListDOM = catList.render();
        main.appendChild(catListDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
        
                </main>
            </div>
    `;
    }
}

export default App;