import Component from './Component.js';

class CatItem extends Component {
    renderTemplate() {
        const cat = this.props.cat;

        return /*html*/`
            <li>
                <h2 class="name">${cat.name}</h2>
                <p class="type">${cat.type}</p>
            </li>
        `;
    }
}

export default CatItem;