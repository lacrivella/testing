import Component from './Component.js';

class AddCat extends Component {

    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newCat = {
                name: formData.get('name'),
                type: formData.get('type')
            };
            onAdd(newCat);

            form.reset();
            document.activeElement.getBoundingClientRect();
        });

        return form;
    }
    renderTemplate() {
        return /*html*/`
            <form>
                <label>Name:<input name="name"></label>
                <label>Type:<input name="type"></label>
                <button>Add</button>
            </form>
        `;
    }

}

export default AddCat;