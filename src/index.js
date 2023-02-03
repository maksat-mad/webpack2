import fetchQuote from "./fetchQuote";
import './styles/main.scss';
import wise from '../src/assets/wise.png';
import {v4 as uuidv4} from 'uuid';
import _ from 'lodash';

document.getElementById('uuidv4').innerHTML = "UUID: " + uuidv4();
document.getElementById('lodash').innerHTML = "lodash: " + _.random(1, 1000, true);
document.getElementById('wise').src = wise;

const quoteBtn = document.getElementById('quoteBtn');
quoteBtn.addEventListener('click', fetchQuote);

fetchQuote();