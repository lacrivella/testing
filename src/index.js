// // import cat data
// import cats from '../data/cats.js';
// // import template function
// import template from '../test/cat-template.js';
// // import html to dom function
// import htmlToDOM from './html-to-DOM.js';

// //reference <ul> parent
// const list = document.getElementById('cats');

// // loop thru cat data
// cats.forEach(cat => {
//     // do stuff with each cats:
//     // call template function with cat function
//     const html = template(cat);

//     // call html to dom with cat template html
//     const dom = htmlToDOM(html);

//     // append DOM to parent
//     list.appendChild(dom);
// });
import App from './components/App.js';

const app = new App();
const appDOM = app.render();

const root = document.getElementById('app');
root.appendChild(appDOM);