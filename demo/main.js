'use strict';

import { cal_Action, Calculator } from '../calculator.js';

const calculator = new Calculator('CALCULATOR');

// // add keyboard event!
// const num_keyCode = /[0-9]/;
// const operator_keyCode = /[]/;

// document.body.addEventListener('keydown', (e) => {
// 	const displayedNum = display.textContent;
// 	const prev_type = container.dataset.prevKeyType;
// 	const first_value = container.dataset.firstValue;
// 	const operator = container.dataset.operator;
// 	// console.log(e.keyCode);
// 	// console.log(e.key);
// 	switch (e.key) {
// 		case '0':
// 		case '1':
// 		case '2':
// 		case '3':
// 		case '4':
// 		case '5':
// 		case '6':
// 		case '7':
// 		case '8':
// 		case '9':
// 			if (displayedNum === '0' || prev_type !== 'number') {
// 				display.textContent = e.key;
// 			} else {
// 				display.textContent = displayedNum + e.key;
// 			}
// 			if (prev_type === 'operator') {
// 				Array.from(btn).forEach((e) => e.classList.remove('pressed'));
// 			}
// 			container.dataset.prevKeyType = 'number';
// 			break;
// 		case '+':
// 			// key.classList.add('pressed');
// 			container.dataset.prevKeyType = 'operator';
// 			container.dataset.operator = 'add';
// 			container.dataset.firstValue = displayedNum;
// 			break;
// 		case '-':
// 			// key.classList.add('pressed');
// 			container.dataset.prevKeyType = 'operator';
// 			container.dataset.operator = 'subtract';
// 			container.dataset.firstValue = displayedNum;
// 			break;
// 		case '*':
// 			// key.classList.add('pressed');
// 			container.dataset.prevKeyType = 'operator';
// 			container.dataset.operator = 'multiply';
// 			container.dataset.firstValue = displayedNum;
// 			break;
// 		case '/':
// 			// key.classList.add('pressed');
// 			container.dataset.prevKeyType = 'operator';
// 			container.dataset.operator = 'divide';
// 			container.dataset.firstValue = displayedNum;
// 			break;
// 		case '.':
// 			display.textContent = !displayedNum.includes('.')
// 				? `${displayedNum}.`
// 				: displayedNum;
// 			break;
// 		case '=':
// 		case 'Enter':
// 			const second_value = displayedNum;
// 			display.textContent = calculator(operator, first_value, second_value);
// 			container.dataset.prevKeyType = 'equal';
// 			container.dataset.operator = '';
// 			container.dataset.firstValue = '';
// 			break;
// 		case 'Escape':
// 			container.dataset.prevKeyType = '';
// 			container.dataset.operator = '';
// 			container.dataset.firstValue = '';
// 			display.textContent = '0';
// 			break;
// 	}
// });
