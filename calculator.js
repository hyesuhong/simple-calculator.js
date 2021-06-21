/* Simple Calculator! */
'use strict';

// calculator action type
export const cal_Action = Object.freeze({
	add: 'add',
	subtract: 'subtract',
	multiply: 'multiply',
	divide: 'divide',
	remind: 'remind',
});

class Draw_Calculator {
	constructor(container) {
		this.container = document.getElementById(container);
	}
	// draw calculator
	insert_Calculator() {
		const wrapper = document.createElement('div');
		wrapper.setAttribute('class', 'simple_container');

		wrapper.innerHTML = `
		<div class="simple_display">
			<p class="display_result">0</p>
		</div>
		<div class="simple_btn_wrapper">
			<button class="simple_btn" data-action="clear">C</button>
			<button class="simple_btn" data-action="add_PM">+/-</button>
			<button class="simple_btn" data-action="remind">%</button>
			<button class="simple_btn sign_btn" data-action="divide">
				&div;
			</button>
			<button class="simple_btn">7</button>
			<button class="simple_btn">8</button>
			<button class="simple_btn">9</button>
			<button class="simple_btn sign_btn" data-action="multiply">
				&times;
			</button>
			<button class="simple_btn">4</button>
			<button class="simple_btn">5</button>
			<button class="simple_btn">6</button>
			<button class="simple_btn sign_btn" data-action="subtract">
				&minus;
			</button>
			<button class="simple_btn">1</button>
			<button class="simple_btn">2</button>
			<button class="simple_btn">3</button>
			<button class="simple_btn sign_btn" data-action="add">&plus;</button>
			<button class="simple_btn zero_btn">0</button>
			<button class="simple_btn" data-action="decimal">.</button>
			<button class="simple_btn sign_btn" data-action="equal">
				&equals;
			</button>
		</div>
		`;

		this.container.appendChild(wrapper);
	}
}

export class Calculator {
	constructor(container) {
		this.container = container;
		this.container_element = document.getElementById(this.container);

		this.calculator = new Draw_Calculator(this.container);
		this.calculator.insert_Calculator();

		/* Constants */
		this.wrapper = document.querySelector('.simple_btn_wrapper');
		this.btn = document.querySelectorAll('.simple_btn');
		this.display = document.querySelector('.display_result');

		this.wrapper.addEventListener('click', (event) => this.onClick(event));
	}

	// calculator result by action
	calculate(action, num1, num2) {
		const _num1 = parseFloat(num1);
		const _num2 = parseFloat(num2);
		switch (action) {
			case cal_Action.add:
				return _num1 + _num2;
			case cal_Action.subtract:
				return _num1 - _num2;
			case cal_Action.multiply:
				return _num1 * _num2;
			case cal_Action.divide:
				return _num1 / _num2;
			default:
				console.log('This is not a calculate function!');
				break;
		}
	}
	// button click event
	onClick(event) {
		const key = event.target;
		const action = key.dataset.action;
		const key_text = key.textContent;

		let type = !action ? 'number' : action;
		console.log(type);
		this.calculator_action(type, key_text, key);
	}

	calculator_action(type, text, target) {
		const displayedNum = this.display.textContent;
		const prev_type = this.container_element.dataset.prevKeyType;
		const furst_value = this.container_element.dataset.firstValue;
		const operator = this.container_element.dataset.operator;
		const minus = this.container_element.dataset.addMinus;

		if (type == 'number') {
			if (displayedNum === '0' || prev_type !== 'number') {
				this.display.textContent = text;
			} else {
				this.display.textContent = displayedNum + text;
			}

			if (prev_type === 'operator') {
				Array.from(this.btn).forEach((e) => {
					e.classList.remove('pressed');
				});
			}
			this.container_element.dataset.prevKeyType = 'number';
		} else {
			switch (type) {
				case cal_Action.add:
				case cal_Action.subtract:
				case cal_Action.multiply:
				case cal_Action.divide:
				case cal_Action.remind:
					target.classList.add('pressed');
					this.container_element.dataset.prevKeyType = 'operator';
					this.container_element.dataset.operator = type;
					this.container_element.dataset.firstValue = displayedNum;
					break;
				case 'add_PM':
					if (displayedNum === '0' || minus === 'Y') {
						this.container_element.dataset.addMinus = '';
						this.display.textContent = displayedNum;
					} else {
						this.container_element.dataset.addMinus = 'Y';
						this.display.textContent = '-' + displayedNum;
					}
					break;
				case 'decimal':
					this.display.textContent = !displayedNum.includes('.')
						? `${displayedNum}.`
						: displayedNum;
					break;
				case 'clear':
					this.container_element.prevKeyType = '';
					this.container_element.operator = '';
					this.container_element.firstValue = '';
					this.display.textContent = '0';
					break;
				case 'equal':
					const second_value = displayedNum;
					this.display.textContent = this.calculate(
						operator,
						furst_value,
						second_value
					);
					this.container_element.dataset.prevKeyType = 'equal';
					this.container_element.dataset.operator = '';
					this.container_element.dataset.firstValue = '';
					break;
			}
		}
	}
}
