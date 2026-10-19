import './style.css';
import { increment } from './counter.js';

const countEl = document.querySelector('#count');
let count = 0;

document.querySelector('#increment').addEventListener('click', () => {
  count = increment(count);
  countEl.textContent = String(count);
});
