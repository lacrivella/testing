function template(cat) {
    return /*html*/`
        <li>
            <h2 id="name">${cat.name}</h2>
            <p class="type">${cat.type}</p>
        </li>
    `;
}
export default template;