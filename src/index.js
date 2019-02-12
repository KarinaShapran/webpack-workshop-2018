import nav from './nav';
import makeButton from './button';
import { makeColorStyle } from './button-style';
// import Foo from './foo.ts';

import imageUrl from './logo.jpg';
import makeImage from './image';

import css from './footer.css';
import buttonStyle from './button.css';

// import { footer } from './footer';
const loadFooter = () => import('./footer');

const button = makeButton('Yay!');
button.style = makeColorStyle('cyan');

document.addEventListener('click', e => {
  loadFooter().then(m => {
    document.body.appendChild(m.footer);
  });
});

const image = makeImage(imageUrl, 200, 200);

document.body.appendChild(button);
document.body.appendChild(image);

