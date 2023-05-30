// check clicks in whole window
window.addEventListener('click', function (event) {
	if (event.target.dataset.action === 'plus') {
		const counterWrapper = event.target.closest('.counter-wrapper');
		const counter = counterWrapper.querySelector('[data-counter]');

		counter.innerText = ++counter.innerText;
	}

	if (event.target.dataset.action === 'minus') {
		const counterWrapper = event.target.closest('.counter-wrapper');
		const counter = counterWrapper.querySelector('[data-counter]');

		if (parseInt(counter.innerText) > 0) counter.innerText = --counter.innerText;
	}
});
