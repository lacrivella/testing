import Component from './Component.js';

class CatItem extends Component {
    render() {
        const listItem = this.renderDOM();
        const onRemove = this.props.onRemove;
        const cat = this.props.cat;
        const removeButton = listItem.querySelector('button');
        
        removeButton.addEventListener('click', () => {
            onRemove(cat);
        });
        
        return listItem;
    }
    renderTemplate() {
        const cat = this.props.cat;

        return /*html*/`
            <li>
                <h2 class="name">${cat.name}</h2>
                <p class="type">${cat.type}</p>
                <button>X</button>
            </li>
        `;
    }
}

export default CatItem;