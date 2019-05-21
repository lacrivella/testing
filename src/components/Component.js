import htmlToDOM from '../html-to-DOM.js';

class Component {
    constructor(props) {
        this.props = props;
    }

    render() {
        return this.renderDOM();
    }
    renderDOM() {
        const html = this.renderTemplate();
        const dom = htmlToDOM(html);
        this.rootElement = dom;
        return dom;
    }

    update(props) {
        this.props = props;
        const oldRoot = this.rootElement;
        const newDOM = this.render();
        oldRoot.replaceWith(newDOM);
    }
}

export default Component;