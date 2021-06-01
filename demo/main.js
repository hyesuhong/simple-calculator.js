/* Constants */
const container = document.querySelector('.simple_container');
const wrapper = document.querySelector('.simple_btn_wrapper');
const btn = document.querySelectorAll('.simple_btn');
const display = document.querySelector('.display_result');

function calculator(action, num1, num2) {
	const _num1 = parseFloat(num1);
	const _num2 = parseFloat(num2);
	switch (action) {
		case 'add':
			return _num1 + _num2;
			break;
		case 'subtract':
			return _num1 - _num2;
			break;
		case 'multiply':
			return _num1 * _num2;
			break;
		case 'divide':
			return _num1 / _num2;
			break;
	}
}

wrapper.addEventListener('click', (e) => {
	const key = e.target;
	const action = key.dataset.action;
	const key_text = key.textContent;
	const displayedNum = display.textContent;
	const prev_type = container.dataset.prevKeyType;
	const first_value = container.dataset.firstValue;
	const operator = container.dataset.operator;

	if (!action) {
		// number keys
		if (displayedNum === '0' || prev_type === 'operator') {
			display.textContent = key_text;
		} else {
			display.textContent = displayedNum + key_text;
		}
		if (prev_type === 'operator') {
			Array.from(btn).forEach((e) => e.classList.remove('pressed'));
		}
	} else {
		switch (action) {
			case 'add':
			case 'subtract':
			case 'multiply':
			case 'divide':
			case 'remind':
				key.classList.add('pressed');
				container.dataset.prevKeyType = 'operator';
				container.dataset.operator = action;
				container.dataset.firstValue = displayedNum;
				break;
			case 'add_PM':
				console.log('add plus or minus');
				break;
			case 'decimal':
				display.textContent = !displayedNum.includes('.')
					? `${displayedNum}.`
					: displayedNum;
				break;
			case 'clear':
				console.log('clear');
				break;
			case 'equal':
				const second_value = displayedNum;
				display.textContent = calculator(operator, first_value, second_value);
				break;
		}
	}
});

// add keyboard event!
const num_keyCode = /[0-9]/;
const operator_keyCode = /[]/;

document.body.addEventListener('keydown', (e) => {
	console.log(e.keyCode);
	console.log(e.key);
	switch (e.keyCode) {
		case '':
			break;
	}
});
