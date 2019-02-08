import nav from './nav';
import { footer } from './footer';
import makeButton from './button';
import { makeColorStyle } from './button-style';
import Foo from './foo.ts';

import imageUrl from './logo.jpg';
import makeImage from './image';

import css from './footer.css';
import buttonStyle from './button.css';

const button = makeButton('Yay!');
button.style = makeColorStyle('cyan');

const image = makeImage(imageUrl, 200, 200);

document.body.appendChild(button);
document.body.appendChild(footer);
document.body.appendChild(image);

