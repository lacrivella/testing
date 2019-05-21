import Component from './Component.js';
import CatItem from './CatItem.js';

class CatList extends Component {
    render() {
        const list = this.renderDOM();

        const cats = this.props.cats;
        const onRemove = this.props.onRemove;

        cats.forEach(cat => {
            const catItem = new CatItem({ cat, onRemove });
            const catItemDOM = catItem.render();
            list.appendChild(catItemDOM);
        });

        // cats
        //     .map(cat => new CatItem({ cat }))
        //     .map(CatItem => catItem.render())

        return list;
    }

    renderTemplate() {

        return /*html*/ `
            <ul id="cats"></ul>
        `;
    }
}

export default CatList;